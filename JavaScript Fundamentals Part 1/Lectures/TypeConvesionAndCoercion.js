//Type Converstion
const inputYear = '1995';
console.log(Number(inputYear), inputYear);//Converts string to number
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'))//Gives NaN Not a number = Invalid Number
console.log(typeof NaN);//Invalid Number

console.log(String(23), 23);//Converts Number to a string

//Type Coercion
console.log('I am ' + 23 + ' years old');//Works this way because of type Coercion
console.log('I am ' + '23' + ' years old');//Works same way as above
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);//+ Concatanates Strings
console.log('23' * '2');//Converts to Numbers
console.log('23' / '2');//Converts to Numbers

let n = '1' + 1;//Concats to 11
n = n - 1;//Takes 11 - 1
console.log(n);

let a = 2 + 3 + 4 + '5';//Adds 2 + 3 + 4 and concats the 5
console.log(a);