'use strict';

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//Creates new array called friends
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//Creates new array called years
const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

//Prints first element of friends array
console.log(friends[0]);
//Prints third element of friends array
console.log(friends[2]);

//Prints length of friends array
console.log(friends.length);
//Grabs last element of array, -1 because Arrays 0 based but length isnt
console.log(friends[friends.length - 1]);

//Changes value of element 2 in array friends to Jay, Only Primative Vals immutable, Arrays not primative
friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice']; Cant replace whole Array

//Creating firstName Var = Matt for Array below
const firstName = 'Matt'
const matt = [firstName, 'Hudock', 2023 - 1995, 'Web Developer', friends];
console.log(matt);
console.log(matt.length);

// Exercise
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

//Returns NaN because years = array, can't do maths with arrays
console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

//Places age results above, into array called ages
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);