'use strict';

// 1. Create an array containing 4 population values of 4 countries of your choice. 
// You may use the values you have been using previously. Store this array into a 
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the 
// world population for these 4 population values. Use the function 
// 'percentageOfWorld1' that you created earlier to compute the 4 
// percentage values

//Defines formatter for number vals with Decimals
const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 4,
    minimumFractionDigits: 4
});

//Defines array populations and inputs data
const populations = [10, 369, 52.28, 125.44];

//Checks if the length of the populations array = 4
console.log(populations.length == 4);

//Defining function called percentage of world 1 and passing in population as param, then doing the calc to figure out percent of world
function percentageOfWorld1(populations) {
    //Returns formatted value of function, passing in population entered below.
    return formatter.format(populations / 7900) * 100;
}

//Defines array percentages, and places in manually data from each value.
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[populations.length - 3]),
percentageOfWorld1(populations[populations.length - 2]), percentageOfWorld1(populations[populations.length - 1])]

console.log(percentages);

// console.log(percentageOfWorld1(populations[0]));
// console.log(percentageOfWorld1(populations[populations.length - 3])); Defines val in populations array @ pos value 1
// console.log(percentageOfWorld1(populations[populations.length - 2]));
// console.log(percentageOfWorld1(populations[populations.length - 1]));



