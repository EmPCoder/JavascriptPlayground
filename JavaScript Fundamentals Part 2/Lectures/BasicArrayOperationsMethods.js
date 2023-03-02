'use strict';

//Creates new array called friends
const friends = ['Michael', 'Steven', 'Peter'];
//Adds value to end of array using Jay as data
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//Adding John to beginning of Array
friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

//Returns index @ which Steven is located
console.log(friends.indexOf('Steven'));
//Returns -1 because DNE
console.log(friends.indexOf('Bob'));

friends.push(23);
//Returns t/f, depending if value exists Steven does so true
console.log(friends.includes('Steven'));
//False, bob doesn't exist
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log(`You have a friend named Steven`);
}