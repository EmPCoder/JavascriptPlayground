'use strict';
const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 4,
    minimumFractionDigits: 4
});

//Defining function called percentage of world 1 and passing in population as param, then doing the calc to figure out percent of world
function percentageOfWorld1(population) {
    return formatter.format(population / 7900) * 100;
}

function describePopulation(country, population) {
    //Defining variable percentage and assigning to above function used to calculate percent of world pop
    const percentage = percentageOfWorld1(population)
    //Defining variable description, which lists the two params above and uses the percentage var created above.
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
    // console.log(percentage);
}

//Invoking Describe Population Assigning country = portual, population = 10 mill
describePopulation('Portual', 10);
describePopulation('USA', 369);
describePopulation('England', 52.28);