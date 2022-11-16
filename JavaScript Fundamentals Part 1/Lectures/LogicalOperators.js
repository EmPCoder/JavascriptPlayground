const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); //Checking to see if both values are true
console.log(hasDriversLicense || hasGoodVision); //Checking to see if atleast one value = true
console.log(!hasDriversLicense); //Changes value from true to false

const shouldDrive = hasDriversLicense && hasGoodVision //Only true if both above true

//Only true if both are true
// if (shouldDrive) {
//     console.log(`Matt is able to drive!`);
// } 
// else {
//     console.log(`Someone else should drive`);
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Matt is able to drive!`);
} 
else {
    console.log(`Someone else should drive`);
}