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

// Defining array list of neighbors and filling out with 3 different "sub-arrays" of values
const listOfNeighbours = [
    ['Canada', 'Mexico'], 
    ['Spain'], 
    ['Norway', 'Sweden','Russia']
];

// console.log(listOfNeighbours);

/* Setting var i = 0, Looping through values of listOfNeighbors as long as i < listOfNeighbors.length
Incrementing by 1 each time (Assigning i to each sub array instance in listofNeighbors)
*/
for (let i = 0; i < listOfNeighbours.length; i++) {
    // console.log(listOfNeighbours[i]);

    /* Setting y = 0, Looping through each sub array included in list of neighbors as long as
    y is currently < each sub array's length, incrementing y by 1 each time. logging each
    Neighbor value on its own line.
    */
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbor: ${listOfNeighbours[i][y]}`);
    }
}