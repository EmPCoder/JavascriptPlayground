/* Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall. */

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
console.log("Marks first BMI => " + bmiMark1);

const bmiJohn1 = weightJohn1 / heightJohn1 ** 2;
console.log("Johns first BMI => " + bmiJohn1);

if (bmiMark1 > bmiJohn1) {
    console.log("Marks BMI 1 is higher then Johns");
}
else {
    console.log("Johns BMI 1 is higher than Marks");
}

let weightMark2 = 95;
let heightMark2 = 1.88;
let weightJohn2 = 85;
let heightJohn2 = 1.76;

const bmiMark2 = weightMark2 / heightMark2 ** 2;
console.log("Marks second BMI => " + bmiMark2);

const bmiJohn2 = weightJohn2 / heightJohn2 ** 2;
console.log("Johns second BMI => " + bmiJohn2);

if (bmiMark2 > bmiJohn2) {
    console.log("Marks BMI 2 is higher than johns");
}
else {
    console.log("Johns BMI 2 is higher than Marks");
}