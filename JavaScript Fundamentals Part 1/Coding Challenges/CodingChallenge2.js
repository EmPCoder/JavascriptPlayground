// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK � 

const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
});

let weightMark1 = 78;
let heightMark1 = 1.69;
let weightJohn1 = 92;
let heightJohn1 = 1.95;

// function BMIMark(weightMark, heightMark) {
//     // let bmi = weightMark / heightMark ** 2;
//     console.log(weightMark / heightMark ** 2);
// }

// console.log(BMIMark);

const bmiMark1 = weightMark1 / heightMark1 ** 2;
console.log("Marks first BMI => " + formatter.format(bmiMark1));

const bmiJohn1 = weightJohn1 / heightJohn1 ** 2;
console.log("Johns first BMI => " + formatter.format(bmiJohn1));

if (bmiMark1 > bmiJohn1) {
    console.log(`Marks BMI 1 is ${formatter.format(bmiMark1)} which is higher then Johns ${formatter.format(bmiJohn1)}`);
}
else {
    console.log(`Johns BMI 1 is ${formatter.format(bmiJohn1)} higher than Marks ${formatter.format(bmiMark1)}`);
}

let weightMark2 = 95;
let heightMark2 = 1.88;
let weightJohn2 = 85;
let heightJohn2 = 1.76;

const bmiMark2 = weightMark2 / heightMark2 ** 2;
console.log("Marks second BMI => " + formatter.format(bmiMark2));

const bmiJohn2 = weightJohn2 / heightJohn2 ** 2;
console.log("Johns second BMI => " + formatter.format(bmiJohn2));

if (bmiMark2 > bmiJohn2) {
    console.log(`Marks BMI 2 is ${formatter.format(bmiMark2)} which is higher then Johns ${formatter.format(bmiJohn2)}`);
}
else {
    console.log(`Johns BMI 2 is ${formatter.format(bmiJohn2)} which is higher then Johns ${formatter.format(bmiMark2)}`);
}