'use strict';

//Defining function measure Kelvin, assigning object measurement with type, unit, and value fields
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // C) FIX Prompts user to enter degrees C (Needs Number() or will always be string val)
    // value: Number(prompt('Degrees celcius:')),
    value: 10,
  };

  // Showed Problem, prompt always returns string. B) Find
  console.log(measurement);
  // Prints data like a table.
  console.table(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value); will Print like a warning
  // console.error(measurement.value); will print like an error

  // Creating var Kelvin taking measurement.value entered above and adding 273 to it
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY just appending 273 to entered number
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  //Assigns var max = to first element in inputed array
  let max = temps[0];
  // let max = 0;

  //Assigns var min = to first element in inputed array
  let min = temps[0];
  // let min = 0; Introduces bug that messes with how min is calculated

  //For loop that loops over the values in the entered array incrementing by 1 each time ran
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    // States that if current temperature in iteration != number just continue
    if (typeof currentTemp != 'number') continue;

    //If current value in array @ position [i] is greater then max becomes Bug max
    // debugger; This statement automatically opens debugger tool
    if (currentTemp > max) max = currentTemp;
    //If current value in array @ position [i] is less then min becomes Bug min
    if (currentTemp < min) min = currentTemp;
  }

  console.log(`The max number of the combined array is => ${max}`);
  console.log(`The min number of the combined array is => ${min}`);
  //console.log(`The temp amplitude for the entered array is => ${max - min}`);
  //Returns max value defined above - min value also defined above.
  return max - min;
};

// caclTempAmplitude([3, 7, 4, 1, 8]);
//Creating var amplitude 2 setting = to value of calcTempAmplitudeBug passing in concated array
const amplitude2 = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(`The amplitude of the combined arrays is => ${amplitude2}`);
