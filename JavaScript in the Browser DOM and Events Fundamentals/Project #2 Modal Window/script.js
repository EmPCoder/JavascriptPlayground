'use strict';

/* When using query selector with multiple elements of the same name it only grabs the first one */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

console.log(btnsShowModal);

// For loop that logs the text content of each modal element
for (let i = 0; i < btnsShowModal.length; i++) {
    console.log(btnsShowModal[i].textContent);
}