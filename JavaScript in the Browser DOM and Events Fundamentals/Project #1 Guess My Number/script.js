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

// Defines variable number, and assigns it = random num between 1 & 20
// trunc is there for making it a whole number.
const secretNumber = Math.trunc(Math.random()*20)+1

// Creating variable score and setting = 20.
let score = 20;

// Selecting the number element, and displaying what the random number generated above is.
document.querySelector('.number').textContent = secretNumber;

// selects the class .check, adds a function that expects and input from the box above the check button
// outputs whatever number was input into that box to the console.
document.querySelector('.check').addEventListener('click', function() {
    // console.log(document.querySelector('.guess').value);

    //Creates var guess and assigns the value = to whatever number is input in the box above check!
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!'

    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!' 

    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too High!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '💥 You lost the game, please try again.';
            document.querySelector('.score').textContent = 0
        }


    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '💥 You lost the game, please try again.';
            document.querySelector('.score').textContent = 0;
        }

    }
    
});