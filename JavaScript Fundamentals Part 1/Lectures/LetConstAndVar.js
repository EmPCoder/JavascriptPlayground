//let Keyword is used when variables can change values, also works for empty vars
let age = 27; //Assigning val
age = 28; //Mutating val

//const Keyword is used when variables are not supposed to change, const variables cannot be empty
const birthYear = 1995;
//birthYear = 1990; // type error

//const job; error

var job = 'Programmer';
job = 'Web Developer';

//Bad idea, doesn't create var.
lastName = 'Hudock';
console.log(lastName);