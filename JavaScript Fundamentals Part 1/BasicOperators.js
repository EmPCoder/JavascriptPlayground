const now = 2037;
const ageMatt = now - 1995;
const ageLindsey = now - 1995;
console.log(ageMatt, ageLindsey);

//Takes ageMatt * 2 and ageMatt / 2
//2 ** 3 means 2 to the power of 3 which = 2 * 2 * 2 
console.log(ageMatt * 2, ageMatt / 2, 2 ** 3);

const firstName = 'Matt';
const lastName = 'Hudock';
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageMatt > ageLindsey); // >, <, >=, <=
console.log(ageMatt >= 18);