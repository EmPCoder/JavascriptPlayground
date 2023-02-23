'use strict';

const calcAverage = (score1, score2, score3) => {
    const avg = (score1 + score2 + score3) / 3;
    return avg;
}

function checkWinner(avgDolphins, avgKoalas){
    if (avgDolphins > avgKoalas && avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win with a score of ${avgDolphins} vs. ${avgKoalas}`);
    }
    else if (avgKoalas > avgDolphins && avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win with a score of ${avgKoalas} vs. ${avgDolphins}`);
    }
    else {
        console.log('Neither team had a score that was double the other');
    }
}

let avgDolphins = calcAverage(44,23,71, "Dolphins 1")
console.log(`Dolphins 1 Avg ${avgDolphins}`);
let avgKoalas = calcAverage(65,54,49, "Koalas 1")
console.log(avgKoalas);

console.log(checkWinner(avgDolphins, avgKoalas));

let avgDolphins2 = calcAverage(85,54,41, "Dolphins 2")
console.log(avgDolphins2);
let avgKoalas2 = calcAverage(23,34,27, "Koalas 2")
console.log(avgKoalas2);

console.log(checkWinner(avgDolphins2, avgKoalas2));

// console.log(calcAverage(44,23,71, "Dolphins 1"));
// console.log(calcAverage(65,54,49, "Koalas 1"));

