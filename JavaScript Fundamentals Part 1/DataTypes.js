// Number: Floating point numbers -> used for decimals and integers let age = 23;
// String: Sequence of characters -> used for text let firstName = Matt;
// Boolean: Logical type that can only be true or false -> Used for making decisions let fullAge = true;
// Undefined: Value taken by a var that is not yet defined ('empty value') let children;
// Null: Also means 'empty value'
// Symbol (ES2015): Value that is unique and cannot be changed
// BigInt (ES2020): Larger integers that the number type cannot hold.
// JS has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, types are determined automatically.

//Automatically Bool Value
true;

let javascriptIsFun = true;
console.log(javascriptIsFun);

//typeof Will show the type of the value
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 5);
// console.log(typeof "Hello World");

//Changes var value
javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
year = 1991;
console.log(typeof year);

//Bug in JS should return null
console.log(typeof null);

