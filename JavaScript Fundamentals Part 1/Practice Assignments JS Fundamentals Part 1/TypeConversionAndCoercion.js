// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right

let a = '9' - '5';
console.log(`Predicted Answer => 4`);
console.log(`Actual Answer ${a}`);

let b = '19' - '13' + '17';
console.log(`Predicted Answer => 617`);
console.log(`Actual Answer ${b}`);

let c = '19' - '13' + 17;
console.log(`Predicted Answer => 23`);
console.log(`Actual Answer ${c}`);

let d = '123' < 57;
console.log(`Predicted Answer => false`);
console.log(`Actual Answer ${d}`);

let e = 5 + 6 + '4' + 9 - 4 - 2;
console.log(`Predicted Answer => 1143`);
console.log(`Actual Answer ${e}`);

