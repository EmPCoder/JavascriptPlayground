'use strict';

//Same way we would select using CSS #for ID etc...
console.log(document.querySelector('.message').textContent);

//Changes the message class from start guessing... to 🎉Correct Number!
document.querySelector('.message').textContent = '🎉 Correct Number!' 

//manipulates the number block to = 13
document.querySelector('.number').textContent = 13;

//manipulates the score to = 10
document.querySelector('.score').textContent = 10;

//Adds 23 into the input field.
document.querySelector('.guess').value = 23;

//logs the input value of the guess class to the console.
console.log(document.querySelector('.guess').value);