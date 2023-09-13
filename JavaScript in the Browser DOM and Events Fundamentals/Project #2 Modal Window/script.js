'use strict';

/* When using query selector with multiple elements of the same name it only grabs the first one */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

// Defining cont openModal = to the ability to open the modal.
const openModal = function() {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

/* For loop that adds a click event listener to each object, also stating that when the btns are 
clicked to remove the hiddent attributes from the text on the modals and the overlay after the 
modals are clicked. */
for (let i = 0; i < btnsShowModal.length; i++) {
    console.log(btnsShowModal[i].addEventListener('click', openModal));
}

// Defining cont closeModal = to the ability to close the open modal, either on x button or overlay.
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Calling the function closeModal on both the Button and the Overlay.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

