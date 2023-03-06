'use strict';

/* 1. Using the object from the previous assignment, log a string like this to the 
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then 
decrease it by two million using brackets notation. */

//Defining object my country
const myCountry = {
    country: 'England',
    capital: 'London',
    language: 'English',
    population: 55.27,
    populationPercentage: ((55.27 / 7900) * 100),
    neighbors: ['Ireland', 'Wales', 'Scotland']
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry['language']}-Speaking people, ${myCountry['neighbors'].length} neighboring countries and a capital city called ${myCountry.capital}`);

//Decreasing Population by 2 million using brackets notation
myCountry['population'] -= 2;
console.log(myCountry['population']);

//Increasing Population by 2 million using . notation
myCountry.population += 2;
console.log(myCountry.population);