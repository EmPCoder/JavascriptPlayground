// 1. If your country's population is greater than 33 million, use the ternary operator 
// to log a string like this to the console: 'Portugal's population is above average'. 
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to 
// 130. See the different results, and set the population back to original

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

let populationAvgString;
let avgPopulation = 33000000
if(population > avgPopulation){
    populationAvgString = `${country}'s population is ${population} which is ${population - avgPopulation} above average.` 
}
else {
    populationAvgString = `${country}'s population is ${population} which is ${avgPopulation - population} below average.` 
}
console.log(populationAvgString);

let mattPop = 50000000

if (population < mattPop && !isIsland && language === 'English') {
    console.log(`You should live in ${country}`);
}
else {
    console.log(`${country} does not meet your criteria`);
}

// population = 13
const popavg = population >= 33000000 ? `${country}'s population of ${population} is above average ` : `${country}'s population of ${population} is below average`
console.log(popavg);
