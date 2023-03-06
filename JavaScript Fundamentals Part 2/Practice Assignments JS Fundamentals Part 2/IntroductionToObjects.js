'use strict';

/* 1. Create an object called 'myCountry' for a country of your choice, containing 
properties 'country', 'capital', 'language', 'population' and 
'neighbours' (an array like we used in previous assignments) */

const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 4,
    minimumFractionDigits: 4
});

const myCountry = {
    country: 'England',
    capital: 'London',
    language: 'English',
    population: 55.27,
    populationPercentage: ((55.27 / 7900) * 100),
    neighbors: ['Ireland', 'Wales', 'Scotland']
};

console.log(myCountry);