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
let secretNumber = Math.trunc(Math.random()*20)+1

// Creating variable score and setting = 20.
let score = 20;

// selects the class .check, adds a function that expects and input from the box above the check button
// outputs whatever number was input into that box to the console.
document.querySelector('.check').addEventListener('click', function() {
    // console.log(document.querySelector('.guess').value);

    //Creates var guess and assigns the value = to whatever number is input in the box above check!
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    // When there is no input
    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!'

        // When the player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!' 

        // Selecting the number element, and displaying what the random number generated above is.
        document.querySelector('.number').textContent = secretNumber;

        // When user guess right number, body of screen turns RGB color (light green).
        document.querySelector('body').style.backgroundColor = '#60b347';

        // When user guess right number, increases size of Randomly Generated Number.
        document.querySelector('.number').style.width = '30rem';

        // When the player guesses a number too big
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

        // When the player guesses a number too small
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too Low!';
            // document.querySelector('body').style.backgroundColor = '#87CEFA';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '💥 You lost the game, please try again.';
            document.querySelector('.score').textContent = 0;
        }

    }
    
});

// Coding Challenge 1

/* Implement a game rest funcitonality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and number variables.
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem). */

// Method that selects the again class, assigns an onclick function to restore the game to defaults.
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    // Use .value if you want null/empty.
    document.querySelector('.guess').value = " ";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});