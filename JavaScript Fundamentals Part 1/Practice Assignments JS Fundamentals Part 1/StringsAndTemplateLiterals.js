// 1. Recreate the 'description' variable from the last assignment, this time 
// using the template literal syntax

let country = 'United States of America';
const continent = 'North America';
let population = 329500000;
const isIsland = false;
let language = 'English';

let date = new Date();

console.log(date);

console.log('I am from the ' + country + ' which is on the contentinent ' + continent + ' which currently has a population of ' + population
    + ' The question of whether or not this is an Island is ' + isIsland + ' The language spoken here is ' + language);

let halfPop = population / 2;
console.log('If the population of ' + country + ' was cut in half it would be ' + halfPop);

const populationPlus1 = population + 1;
console.log('If the population of ' + country + ' was increased by 1 it would be ' + populationPlus1);

const populationFinland = 6000000;
if (population > populationFinland) {
    console.log('My countries population is greater than Finlands Population')
}
else {
    console.log('My countries population is less than Finlands Population')
}

const avgCountryPopulation = 33000000;
if (population > avgCountryPopulation) {
    console.log('My countries population is greater than the avg countries population')
}
else {
    console.log('My countries population is less than the avg countries population')
}

const countryDescription = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(countryDescription);

const countryDescriptionLiteral = `The ${country} is in ${continent}, and its ${population}
million people speak ${language}`;
console.log(countryDescriptionLiteral);