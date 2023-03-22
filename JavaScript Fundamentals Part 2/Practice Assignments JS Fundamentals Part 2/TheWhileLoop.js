'use strict';

/*
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', 
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
*/

/*
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the 
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the 
'percentages' array that we created manually in the previous assignment, 
and reflect on how much better this solution is
*/

//Formatter function that says decimals will always only be 4 digets i.e 12.45
const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 4,
    minimumFractionDigits: 4
});

//Defines array populations and inputs data
const populations = [10, 369, 52.28, 125.44];
//Defining Empty array percentages3
const percentages3 = [];

//Defining function called percentage of world 1 and passing in population as param, then doing the calc to figure out percent of world
function percentageOfWorld1(population) {
    //Returns formatted value of function, passing in population entered below.
    return formatter.format(population / 7900) * 100;
}

//While loop that sets i = 0, loops through the data in populations until length is hit,
//Increments i each time and stores percentage values using percentageOfWorld1 Function
//After each run of the function that % value is stored in perc, and then that gets added
//To the percentages3 array and added to the end each time.
let i = 0
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}
console.log(percentages3);