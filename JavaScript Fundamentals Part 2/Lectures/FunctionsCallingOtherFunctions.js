'use strict';

// Cuts fruit in pieces
function cutFruitPieces(fruit) {
    // return fruit * 4;//Fruit Cut into 4 pieces
    return fruit * 3;//Fruit Cut into 3 pieces
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    // console.log(apples, oranges); Logs how many apples + oranges not needed
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;//Becomes result of Executing Function
}

console.log(fruitProcessor(2, 3));

