'use strict';

/*
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays 
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

//Formatter function that says decimals will always only be 4 digets i.e 12.45
const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 4,
    minimumFractionDigits: 4
});

//Defining array bills and assigning data
const bills = [
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52 
];

// console.log(bills);

//Declaring empty array tips
const tips = [];
//Declaring empty array totals
const totals = [];

/* Function that looks for a value of billAmt, and checks if the amt entered is between 50 
& 300 if so multiplies by .15 returns tipAmt else returns tipAmt = amt entered * .20 */
const calcTip = function(billAmt) {
    if (billAmt >= 50 && billAmt <= 300) {
        let tipAmt = billAmt * .15;
        return tipAmt;
    }
    else {
        let tipAmt = billAmt * .20;
        return tipAmt;
    }
}

// console.log(calcTip(bills[0]));

/* For Loop that initializes i @ 0 and compares length of bills array incrementing by 1 each time
then assigns the tip value using the above calcTip function passing in ea. iteration of the bills
array and assigns the value to the end of the empty tips array created above
Dually, assigns a variable total = bills[each position] + tip calculated above and assigns that 
value to the end of the totals array which was created above. */
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);

    const total = (bills[i] + tip);
    totals.push(total);
}

//Logs tips array to console
console.log(tips);
//Logs totals array to console
console.log(totals);

//Assigning var sum setting to 0
let sum = 0;

/* For loop that assigns s = 0 compares length of the above totals array incrementing by 1 ea.
time, then adds the sum of all iterations in the totals array to each other */
for (let s = 0; s < totals.length; s++) {
    sum += totals[s]
}

//Printing the current sum when for loop above is done
console.log(`The current Sum of the totals array is ${sum}`);

/* Function that takes an array as input and calculates an avg var which uses the sum created above
and / by the length of the array while returning the avg value. */
const calcAverage = function(arr) {
    const avg = sum / arr.length;
    return avg
}

//Printing the average of the array that was passed in above.
console.log(`The average of the current totals array is ${calcAverage(totals)}`);

//Another way of doing calcAverage
/*
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
*/