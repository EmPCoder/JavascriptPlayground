// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
// country that speaks english, has less than 50 million people and is not an 
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her. 
// You will need to write a condition that accounts for all of Sarah's criteria. Take 
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily 
// change some variables in order to make the condition true (unless you live in 
// Canada :D)

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