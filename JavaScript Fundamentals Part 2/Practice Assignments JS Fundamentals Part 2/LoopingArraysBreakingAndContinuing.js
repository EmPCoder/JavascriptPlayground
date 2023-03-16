'use strict';

/*
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the 
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the 
'percentages' array that we created manually in the previous assignment, 
and reflect on how much better this solution is
*/

const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 4,
    minimumFractionDigits: 4
});

//Defines array populations and inputs data
const populations = [10, 369, 52.28, 125.44];
const percentages = [];

//Defining function called percentage of world 1 and passing in population as param, then doing the calc to figure out percent of world
function percentageOfWorld1(population) {
    //Returns formatted value of function, passing in population entered below.
    return formatter.format(population / 7900) * 100;
}

for(let i = 0; i < populations.length; i++){
    percentages[i] = percentageOfWorld1(populations[i])
}

console.log(percentages);

