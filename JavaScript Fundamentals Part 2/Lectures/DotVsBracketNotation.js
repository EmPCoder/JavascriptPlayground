'use strict';

//Defining Object matt, and assigning key value pairs (properties) to each data point
const matt = {
    fName: 'Matt',
    lName: 'Hudock',
    age: 2023 - 1995,
    job: 'Web Developer',
    friends: ['Lindsey', 'Brandon', 'Tiger']
};

console.log(matt);

//Logging property from matt object of lName
console.log(matt.lName); //Using . notation
console.log(matt['lName']); //Using Bracket Notation, can use any expression here

//Stores var nameKey with value Name
const nameKey = 'Name';
console.log(matt['f' + nameKey]); //logs fName using f then nameKey Var
console.log(matt['l' + nameKey]); //logs fName using l then nameKey Var

// console.log(matt.'l' + nameKey); //Doesn't work showing same as above.

//Creates pop-up window with input field.
const interestedIn = prompt('What do you want to know about Matt? Choose between fName, lName, age, job, and friends');
//console.log(matt.interestedIn);//Returns Undefined

//If this value exists truthy value, BC not undefined
if(matt[interestedIn]) {
    console.log(matt[interestedIn]); //The expression between the brackets gets evaluated.
} 
else {
    console.log('Wrong request! Choose between fName, lName, age, job, and friends');
}

matt.location = 'USA'; //Adding Location to Matt object using . method
matt['state'] = 'Pennsylvania' //Adding State to Matt object using brackets
console.log(matt);

//Challenge
//*Jonas has 3 friends, and his best friend is called Michael

console.log(`${matt.fName} has ${matt.friends.length} friends, and his best friend is named ${matt['friends'][0]}`);

// ${matt.friends[0]}