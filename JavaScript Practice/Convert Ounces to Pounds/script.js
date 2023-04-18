'use strict';

//Defines Prompt variable ounces that allows user input for number of ounces
let ounces = prompt('How many ounces would you like to convert to pounds?');

/* Regular expression that tests if the input from the ounces prompt is either a regular
integer or a decimal integer if so it takes the entered number and rungs it through the 
conversion function defined below to output the number of pounds */
if (/^[0-9]\d*(\.\d+)$/.test(ounces) || /^[0-9]+$/.test(ounces)) {
  /**
   * Function that takes in the ounces var defined above, and the calculates the pounds by dividing
   * by 16 and storing + returning that result in a pounds variable
   * @param {*} ounces
   * @returns pounds
   */
  function convertOuncesToPounds(ounces) {
    const pounds = ounces / 16;
    return pounds;
  }

  //Logs string showing how many ounces user entered and value in Pounds.
  console.log(
    `You have entered ${ounces} ounces which is = to ${convertOuncesToPounds(
      ounces
    )} Pounds`
  );
} else {
  console.log(
    'You have not entered a number please reload the page and enter a number'
  );
}
