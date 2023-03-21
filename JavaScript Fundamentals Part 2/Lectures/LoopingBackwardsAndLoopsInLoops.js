'use strict';

//Defines data structure mattArray with various data inputs, 
//Using arrays noway to assign vars?
const matt = [
    'Matt',
    'Hudock',
    2023 - 1995,
    'Web Developer',
    ['Lindsey', 'Brandon', 'Tiger'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

//For loop that assigns var i and sets it = to length of matt array - 1 loops through the data
//while i >= 0 so 5 times in total, then decrements by 1 prints data of array matt in reverse
for (let i = matt.length - 1; i >= 0 ; i--){
    console.log(i, matt[i]);
}

/* For loop that sets var exercise = 1, keeps running while exericise < 4 and increments by
1 each time. logs "Starting Exercise with Counter var passed in"
*/
for (let exercise = 1; exercise < 4; exercise++){
    console.log(`------- Starting Exercise ${exercise} -------`);

    /*
    For loop that sets var rep = 1, keeps running while rep <= 5, increments by 1 each time
    logs Exericise # defined above, and which rep you are on using this local var. 
    */
    for (let rep = 1; rep <= 5; rep++){
        console.log(`Exericse ${exercise} Lifting Weight Repition ${rep} 🏋`); 
    }
}