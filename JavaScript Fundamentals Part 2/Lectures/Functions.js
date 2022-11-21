'use strict';

//Defining Function
function logger() {
    console.log('My name is Matt');
}

//Calling/Running/Invoking Function
logger(23);//Has no effect because params aren't defined.
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;//Becomes result of Executing Function
}

const appleJuice = fruitProcessor(5, 0);//Inputs for Fruit Processor Function
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));//Works Same as above
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//DRY Don't Repeat Yourself Functions help with this.

const num = Number('23');
console.log(num);