/*1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens*/

let country = 'United States of America';
const continent = 'North America';
let population = 329500000;
const isIsland = false;
let language = 'English';

let date = new Date();

console.log(date);

console.log('I am from the ' + country + ' which is on the contentinent ' + continent + ' which currently has a population of ' + population
    + ' The question of whether or not this is an Island is ' + isIsland + ' The language spoken here is ' + language);