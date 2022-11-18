// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;

let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;

// let dolphinsAvg = avgCalcDolphins()
// let koalasAvg = avgCalcKoalas()
let z = 3;

const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
});

const avgCalc1 = function avgCalcScore(x,y) {
    return `The score for the first average is => ` + (dolphinsScore1 + koalasScore1) / (z);
}
console.log((avgCalc1((dolphinsScore1, koalasScore1))));

const avgCalcDolphins = function avgDolphinScore(dolphinsScore1, dolphinsScore2, dolphinsScore3) {
    return `The Avg score for the dolphins is => ` + (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / (z);
}
console.log((avgCalcDolphins(dolphinsScore1, dolphinsScore2, dolphinsScore3)));

const avgCalcKoalas = function avgKoalasScore(koalasScore1, koalasScore2, koalasScore3) {
    return `The Avg score for the koalas is => ` + (koalasScore1 + koalasScore2 + koalasScore3) / (z);
}
console.log((avgCalcKoalas(koalasScore1, koalasScore2, koalasScore3)));

if (avgCalcDolphins < avgCalcKoalas) {
    console.log(`Cream`);
}
else if (avgCalcDolphins > avgCalcKoalas) {
    console.log(`steam`);
}

// Non Function Way

// let avgDolphinsTyped = ((96 + 108 + 89) /3)
let avgDolphinsTyped = ((97 + 112 + 101) /3)
console.log(`Avg Dolphins score typed => ` + formatter.format(avgDolphinsTyped));

// let avgKoalasTyped = ((88 + 91 + 110) /3)
// let avgKoalasTyped = ((109 + 95 + 123) /3)
let avgKoalasTyped = ((109 + 95 + 106) /3)
console.log(`Avg Koalas score typed => ` + formatter.format(avgKoalasTyped));

if (avgDolphinsTyped > avgKoalasTyped) {
    console.log(`Dolphins Win, but have a score less than 100`);
}
else if (avgDolphinsTyped < avgKoalasTyped) {
    console.log(`Koalas Win, but have a score less than 100`);
}
else if (avgDolphinsTyped === avgKoalasTyped) {
    console.log(`Draw, but have a score less than 100`);
}

if (avgDolphinsTyped > avgKoalasTyped && avgDolphinsTyped >= 100) {
    console.log(`Dolphins Win, and have a score greater than 100`);
}
else if (avgDolphinsTyped < avgKoalasTyped && avgKoalasTyped >= 100) {
    console.log(`Koalas Win, and have a score greater than 100`);
}
else if (avgDolphinsTyped === avgKoalasTyped && avgDolphinsTyped && avgKoalasTyped >= 100) {
    console.log(`Draw, and have a score greater than 100`);
}

