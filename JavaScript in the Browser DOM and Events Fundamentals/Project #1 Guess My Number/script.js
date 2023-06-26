'use strict';

// //Same way we would select using CSS #for ID etc...
// console.log(document.querySelector('.message').textContent);

// //Changes the message class from start guessing... to 🎉Correct Number!
// document.querySelector('.message').textContent = '🎉 Correct Number!' 

// //manipulates the number block to = 13
// document.querySelector('.number').textContent = 13;

// //manipulates the score to = 10
// document.querySelector('.score').textContent = 10;

// //Adds 23 into the input field.
// document.querySelector('.guess').value = 23;

// //logs the input value of the guess class to the console.
// console.log(document.querySelector('.guess').value);

// selects the class .check, adds a function that expects and input from the box above the check button
// outputs whatever number was input into that box to the console.
document.querySelector('.check').addEventListener('click', function() {
    // console.log(document.querySelector('.guess').value);

    //Creates var guess and assigns the value = to whatever number is input in the box above check!
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
    }
});