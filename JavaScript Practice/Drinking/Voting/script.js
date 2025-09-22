'use strict';

//Defines Prompt variable ounces that allows user input for number of ounces
let age = prompt('Please enter your current age.');
let name = prompt('Please enter your name');

function determineAbilities(age, name) {
    if (/^[0-9]\d*(\.\d+)$/.test(age) || /^[0-9]+$/.test(age)) {
        if (age < 18) {
            console.log(`Hi ${name} you have entered your age as ${age}. Which means you can't vote, drink or buy tobacco`)
        }
        else if (age >= 18 && age < 21) {
            console.log(`Hi ${name} you have entered your age as ${age}. Which means you can vote! but you cant drink or use tobbaco`)
        }
        else if (age >= 21) {
            console.log(`Hi ${name} you have entered your age as ${age}. Which means you can vote, drink, and buy tobacco!`)
        }
    }
}

console.log(determineAbilities(age, name));