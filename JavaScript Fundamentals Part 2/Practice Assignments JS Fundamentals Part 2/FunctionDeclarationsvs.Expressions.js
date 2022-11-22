'use strict';

// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population 
// represents. For example, China has 1441 million people, so it's about 18.2% of 
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900 
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called 
// 'percentageOfWorld2', and also call it with 3 country populations (can be 
// the same populations)
const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 3,
    minimumFractionDigits: 3
});

//Function Declaration
function percentageOfWorld1(country, population) {
    const popPercent1 = `${country} has ${population} million people, so it's about ${formatter.format(population / 7900) * 100}%`
    return popPercent1;
}

const popChina = percentageOfWorld1("China", 1441);
console.log(popChina);

const popUSA = percentageOfWorld1("USA", 369);
console.log(popUSA);

const popEngland = percentageOfWorld1("England", 56.28);
console.log(popEngland);

//Function Expression
const percentageOfWorld2 = function percentageOfWorld1(country, population) {
    // const popPercent1 = `${country} has ${population} million people, so it's about ${formatter.format(population / 7900) * 100}%`
    return `${country} has ${population} million people, so it's about ${formatter.format(population / 7900) * 100}%`;
}

const popChina2 = percentageOfWorld2("China", 1441);
console.log(popChina2);

const popUSA2 = percentageOfWorld2("USA", 369);
console.log(popUSA2);

const popEngland2 = percentageOfWorld2("England", 56.28);
console.log(popEngland2);


