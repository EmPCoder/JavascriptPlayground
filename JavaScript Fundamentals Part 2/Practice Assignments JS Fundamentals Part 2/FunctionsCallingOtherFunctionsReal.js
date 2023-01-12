// 1. Create a function called 'describePopulation'. Use the function type you 
// like the most. This function takes in two arguments: 'country' and 
// 'population', and returns a string like this: 'China has 1441 million people, 
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the 
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

'use strict';
const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 4,
    minimumFractionDigits: 4
});

//Defining function called percentage of world 1 and passing in population as param, then doing the calc to figure out percent of world
function percentageOfWorld1(population) {
    //Returns formatted value of function, passing in population entered below.
    return formatter.format(population / 7900) * 100;
}

function describePopulation(country, population) {
    //Assigns percentage var = calculation of percentageOfWorld1 Function
    const percentage = percentageOfWorld1(population);
    const countryDescription = `${country} has ${population} million people, which is about ${percentage}% of the world.`
    console.log(countryDescription);
}

describePopulation('Portual', 10);
describePopulation('USA', 369);
describePopulation('England', 52.28);