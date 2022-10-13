const age = 15;
const isOldEnough = age >= 16; //Takes age var and checks if >=16

if (isOldEnough) 
{
    console.log('Matt can start driving with a drivers license 🚗')
}
else {
    const yearsLeft = 16 - age;
    console.log(`Matt is too young. Wait another ${yearsLeft} years.`);
}

// Control Structure
// if (){ 

// }
// else {

// }

const birthYear = 1995;

//Code Blocks
let century;
if(birthYear <= 2000)
{
    century = `This person was born in the 20th century`;
}else
{
    century = `This person was born in the 21st century`;
}
console.log(century)