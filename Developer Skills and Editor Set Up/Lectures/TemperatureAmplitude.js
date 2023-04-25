'use strict';

//Problem 1:

//We work for a company building a smart home thermometer, Our most recent task is this:
//"Given an array of temperatures of one day, calculate the temperature amplitude. Keep
//in mind that sometimes there might be a sensor error."

// 1) Understanding the problem.
// - What is temp amplitude? Difference between highest and lowest in array i.e. Mode?
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems.
// - How to ignore errors?
// - Find max value in temp array "Javascript get max value in array"
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

//Defining array temperatures and populating with values
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  //Assigns var max = to first element in inputed array
  let max = temps[0];

  //Assigns var min = to first element in inputed array
  let min = temps[0];

  //For loop that loops over the values in the entered array incrementing by 1 each time ran
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    // States that if current temperature in iteration != number just continue
    if (typeof currentTemp != 'number') continue;

    //If current value in array @ position [i] is greater then max becomes new max
    if (currentTemp > max) max = currentTemp;
    //If current value in array @ position [i] is less then min becomes new min
    if (currentTemp < min) min = currentTemp;
  }

  console.log(`The max number in the array is => ${max}`);
  console.log(`The min number in the array is => ${min}`);
  //console.log(`The temp amplitude for the entered array is => ${max - min}`);
  //Returns max value defined above - min value also defined above.
  return max - min;
};

// caclTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(`The amplitude of the entered array is => ${amplitude}`);

console.log(temperatures);

// Problem 2:
// Function should now receive 2 arrays of temperatures

// 1) Understading the problem
// - With 2 arrays, should we implement same functionality twice? NO! Just merge 2 arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays? https://stackoverflow.com/questions/5080028/what-is-the-most-efficient-way-to-concatenate-n-arrays

//Defining array temperatures1 and populating with values
const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
//Defining array temperatures2 and populating with values
const temperatures2 = [4, 100, 54, 69, 24, 'test', 'woah', 9, 0, false];

//Concatinating temperatures1 array with temperatures2 array and assigning to masterTempArray
let masterTempArray = temperatures1.concat(temperatures2);

const calcTempAmplitudeNew = function (temps) {
  //Assigns var max = to first element in inputed array
  let max = temps[0];

  //Assigns var min = to first element in inputed array
  let min = temps[0];

  //For loop that loops over the values in the entered array incrementing by 1 each time ran
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    // States that if current temperature in iteration != number just continue
    if (typeof currentTemp != 'number') continue;

    //If current value in array @ position [i] is greater then max becomes new max
    if (currentTemp > max) max = currentTemp;
    //If current value in array @ position [i] is less then min becomes new min
    if (currentTemp < min) min = currentTemp;
  }

  console.log(`The max number of the combined array is => ${max}`);
  console.log(`The min number of the combined array is => ${min}`);
  //console.log(`The temp amplitude for the entered array is => ${max - min}`);
  //Returns max value defined above - min value also defined above.
  return max - min;
};

// caclTempAmplitude([3, 7, 4, 1, 8]);
//Creating var amplitude 2 setting = to value of calcTempAmplitudeNew passing in concated array
const amplitude2 = calcTempAmplitudeNew(masterTempArray);
console.log(`The amplitude of the combined arrays is => ${amplitude2}`);

console.log(masterTempArray);
