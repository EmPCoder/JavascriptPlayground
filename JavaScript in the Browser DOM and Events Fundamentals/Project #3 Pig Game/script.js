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

//Declaring the following vars to be accessible outside init function
let scores, currentScore, activePlayer, playing;

// Starting Conditions
const init = function() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  //Setting Values of score elements for starting conditions
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  //Hiding dice by default, by adding hidden class.
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

// Defining function switch player, that selects the active player based on x condition
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// const setScoreBack0 = function() {
//   document.querySelector(`score--${activePlayer}`) = 0;
// }

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
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
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // TODO: Change Later
      // current0El.textContent = currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // console.log('Hold button');
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // console.log(scores[activePlayer]);

    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
