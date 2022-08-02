const firstName = 'Matt';
const job = 'Web Developer';
const birthYear = 1995;
const year = 2037;

let age = 2022 - birthYear;

//Cant use '' with words with appostrophies
const matt = "Hi i'm " + firstName + ", a " + age + " year old " + job;
console.log(matt);

//Converts the calc to a string for ease of use
const matt2 = "Hi i'm " + firstName + ", a " + (year - birthYear) + " year old " + job;
console.log(matt2);

//Template literal
const mattNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(mattNew);

console.log(`Just a regular string...`);

//Old way of multiline strings
console.log('String with \n\
multiple \n\
lines');

//New way of multiline strings using literals
console.log(`String
multiple
lines`);