// 1. Write a function called 'describeCountry' which takes three parameters: 
// 'country', 'population' and 'capitalCity'. Based on this input, the 
// function returns a string with this format: 'Finland has 6 million people and its 
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the 
// returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) {
    const countryDescription = `${country} has a population of ${population} million people and its capital city is ${capitalCity}`
    return countryDescription
}

const finland = describeCountry("Finland", 6, "Helsinki");
console.log(finland);

const usa = describeCountry("United States of America", 329, "Washington DC");
console.log(usa);

const england = describeCountry("England", 56.28, "London");
console.log(england);