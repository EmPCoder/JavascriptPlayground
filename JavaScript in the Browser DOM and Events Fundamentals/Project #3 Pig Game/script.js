'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//Selecting ID of score0
const score0El = document.querySelector('#score--0');
//Works same as above without #
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
//Grabbing class dice from html
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Setting Values of score elements for starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
//Hiding dice by default, by adding hidden class.
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    // 1. Generate a random dice roll 
    const dice = Math.trunc(Math.random() * 6) + 1
    // console.log(dice);
    
    // 2. Display dice
    diceEl.classList.remove('hidden');
    // Calls src attribute, sets var to display dice based on which # rolled.
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        // Selects score dynamically based on which is the current active player.
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // TODO: Change Later
        // current0El.textContent = currentScore; 
    } else {
        // switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        currentScore = 0; 
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }

})