'use strict';

/*Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) */

//Function calcTip taking in a number input billAmt to allow for calculation of how much you should tip
const calcTip = function (billAmt) {
    if (billAmt >= 50 && billAmt <= 300) {
        let tipAmt = billAmt * .15;
        return tipAmt;
        // return `your bill was ${billAmt}, and your tip should be ${tipAmt}, and your total should be ${billAmt + tipAmt}`
    }
    else {
        let tipAmt = billAmt * .20;
        return tipAmt;
        // return `your bill was ${billAmt}, and your tip should be ${tipAmt}, and your total should be ${billAmt + tipAmt}`
    }
}

//Defining array of data (bills)
const bills = [125, 555, 44];

console.log(calcTip(bills[0]));
console.log(calcTip(bills[1]));
console.log(calcTip(bills[2]));

//Defining array tips, to use calcTip plus each array index
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips);

//Defining array total to use calcTip and add each value to the corresponding index in bills array
const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
console.log(total);