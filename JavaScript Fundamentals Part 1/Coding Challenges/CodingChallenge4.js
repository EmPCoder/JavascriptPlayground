// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �
// age >= 18 ? console.log('I like to drink wine 🍷') : 
// console.log('I like to drink water 💧') ;

const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
});

let tip;
let bill = 52.36;
let tipPercent;
const billInput = Number(prompt("How much was your bill?"));
let tipInput;

if (bill >= 50 && bill <= 300){
    tip = bill * .15;
    tipPercent = .15
}
else {
    tip = bill * .20;
    tipPercent = .20
}

if (billInput >= 50 && billInput <= 300){
    tipInput = billInput * .15;
    tipPercent = .15
}
else {
    tipInput = billInput * .20;
    tipPercent = .20
}

// bill >= 50 && bill <= 300 ? tip = bill * .15 : tip = bill * .20
// billInput >= 50 && billInput <= 300 ? tipInput = billInput * .15 : tipInput = billInput * .20

console.log(`the bill was $${bill}, which was tipped at ${formatter.format(tipPercent)}%, therefore the tip was $${formatter.format(tip)} and the total value is $${formatter.format(bill + tip)}`);
console.log(`the bill was $${billInput}, which was tipped at ${formatter.format(tipPercent)}%, therefore the tip was $${formatter.format(tipInput)} and the total value is $${formatter.format(billInput + tipInput)}`);