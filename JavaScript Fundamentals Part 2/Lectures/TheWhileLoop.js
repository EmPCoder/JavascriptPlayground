'use strict';

console.log('----- For Loop -----');
//For loop that defines var rep, if rep <= 10 will print below clg statemnt
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repition ${rep} 🏋`); 
}

console.log('----- While Loop -----');

// Defining var rep = 1
let rep = 1;
//Keep loop running while rep <= 10
while (rep <= 10) {
    console.log(`Lifting weights repition ${rep} 🏋`);
    //Incrementing rep by 1 each time while loop is ran
    rep++; 
}

// While loop is more versitile because it doesn't need a counter. 

//Creats a number between 0 - 1 Mult by 6, Adding Math.Trunc gets whole numbers
let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// While loop that runs until you roll a 6, prints your roll, and reassigns after running so to
// Not cause infinite loop
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    // If statement that says loop is about to end because you rolled a 6
    if (dice === 6 ) {
        console.log('Loop is able to end... Because you rolled a 6'); 
    }
}