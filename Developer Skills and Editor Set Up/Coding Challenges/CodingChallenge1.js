'use strict';

/*Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]*/

//1) Understanding the problem
// - Create a function that accepts an array as input
// - Convert Array to String

//2) Sub problems
// - how to add degree symbol to a number

//Defining constand degCelcius that is just a string with the degree symbol+C
const degCelcius = 'ºC';

//Dataset 1
const data1 = [17, 21, 23];

//Dataset 2
const data2 = [12, 5, -5, 0, 4];

//Combined Array taking dataset 1 and 2
const combinedArray = data1.concat(data2);

//Function printForecast that accepts an array value, loops over said values and spits out
//The projected temperature for the next few days depending on length of array
const printForecast = function (arr) {
  let str = '';
  //For loop that starts @ 0 compares to the length of entered array, increments each time and
  //Sets the value for each value in array at [i] in projectedTemp var, another var called
  //CurrentDay that adds 1 to each i value because they start at 0
  for (let i = 0; i < arr.length; i++) {
    let projectedTemp = arr[i];
    let currentDay = i + 1;
    //If statement that checks if current day != 1 if true prints days at end if false prints day
    if (currentDay != 1) {
      str += `...${projectedTemp}${degCelcius} in ${currentDay} days`;
    } else {
      str += `...${projectedTemp}${degCelcius} in ${currentDay} day`;
    }
  }
  console.log(str);
};

console.log('----------Data 1----------');
printForecast(data1);

console.log('----------Data 2----------');
printForecast(data2);

console.log('----------Combined Data----------');
printForecast(combinedArray);
