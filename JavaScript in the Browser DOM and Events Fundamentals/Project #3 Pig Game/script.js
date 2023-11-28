'use strict';

//Selecting ID of score0
const score0El = document.querySelector('#score--0');
//Works same as above without #
const score1El = document.getElementById('score--1');
//Grabbing class dice from html
const diceEl = document.querySelector('.dice');

//Setting Values of score elements for starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
//Hiding dice by default, by adding hidden class.
diceEl.classList.add('hidden');