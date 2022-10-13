// 5 Falsy Values 0, '', undefined, null, NaN

console.log(Boolean(0));//Falsy
console.log(Boolean(undefined));//Falsy
console.log(Boolean('Matt'));//True
console.log(Boolean({}));//True
console.log(Boolean(''));//Falsy

const money = 0;//Same as saying undefined etc...
if (money) {
    console.log("Don't spend it all");
}
else {
    console.log('You should get a job!');
}

let height;//Height not defined which = false.
height = 123;//Defines a valid number to height
if (height) {
    console.log('Yay! Height is defined');
}
else {
    console.log('Height is UNDEFINED');
}