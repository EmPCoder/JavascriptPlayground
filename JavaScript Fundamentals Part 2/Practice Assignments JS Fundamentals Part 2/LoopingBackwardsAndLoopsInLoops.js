'use strict';

/*
1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire 
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't 
worry if it's too difficult for you! But you can still try to figure this out anyway 
*/

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden' , 'Russia']
];

const neighbouringCountries = [
    ['Canada', 'Mexico']
];

console.log(listOfNeighbours[0]);
console.log(listOfNeighbours.length);

for (let i = 0; i < neighbouringCountries.length; i++) {
    // console.log(`Neighbor: ${neighbouringCountries[i]}`);

    for (let y = 0; y < neighbouringCountries[i].length; y++) {
        console.log(`Neighbor: ${neighbouringCountries[i][y]}`);
    }
}

// for (let i = 0; i < listOfNeighbours.length; i++){
//     // console.log(listOfNeighbours[i]);

//     for (let y = 0; y < listOfNeighbours[i].length; y++) {
//         console.log(`Neighbor: ${listOfNeighbours[i][y]}`);
//     }
// }
