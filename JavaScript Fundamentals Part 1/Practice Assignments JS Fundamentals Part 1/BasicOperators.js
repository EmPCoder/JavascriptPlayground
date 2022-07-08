// 1. If your country split in half, and each half would contain half the population, 
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than 
// Finland?
// 4. The average population of a country is 33 million people. Does your country 
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million 
// people speak portuguese'

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