'use strict';

/*
1. Add a method called 'describe' to the 'myCountry' object. This method 
will log a string to the console, similar to the string logged in the previous 
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This 
method will set a new property on the object, called 'isIsland'. 
'isIsland' will be true if there are no neighbouring countries, and false if 
there are. Use the ternary operator to set the property.
*/

//Defining object my country
const myCountry = {
    country: 'England',
    capital: 'London',
    language: 'English',
    population: 55.27,
    populationPercentage: ((55.27 / 7900) * 100),
    neighbors: ['Ireland', 'Wales', 'Scotland'],
    isIsland: false,

    describe: function(){
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`
    },

    checkIsIsland: function(){
        this.isIsland = this.neighbors.length === 0 ? true : false
    }
};

myCountry.describe();
myCountry.checkIsIsland();
console.log(myCountry);

console.log(myCountry.describe());
console.log(myCountry.checkIsIsland());
