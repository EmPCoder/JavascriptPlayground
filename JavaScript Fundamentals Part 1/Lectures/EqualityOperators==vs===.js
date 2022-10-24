const age = 18;
const ageString = `18`;

if(age === 18) //If age is exactly 18
{
    console.log(`You just became an adult! Strict`);
}

//18===18 True (Strict Equality Operator)
//18===19 False

//`18` == 18 True, because == performs type coercion

if(ageString == 18) //If age is exactly 18
{
    console.log(`You just became an adult! Loose`);
}

const favorite = Number(prompt("what is your favorite number?")); //Asks user a question
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) { //'23' == 23
    console.log(`cool! 23 is an amazing number! Loose`);
}

if (favorite === 23) { //Need to convert to number because === 22 === 23 FALSE
    console.log(`cool! 23 is an amazing number! Strict`);
}
else if (favorite === 7) {
    console.log('7 is also a cool number!');
}
else if (favorite === 9) {
    console.log('9 is also a cool number!');
}
else {
    console.log(`${favorite} is not 7, 23, or 9 so not cool bro.`)
}

if(favorite !== 23){ //Strict different
    console.log('why not 23?');
}
else {
    console.log('Great minds think alike');
}