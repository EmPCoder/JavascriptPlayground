'use strict';

const calcAge = function(birthYear) { //This param is local var.
    //Returns time until retirement taking in birth year
    return 2023 - birthYear//Could also be year
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0){
        // return retirement; Doesn't work because return automatically exits
        return `${firstName} has ${retirement} years left until retirement.`
    }
    else if (retirement < 0) {
        const retirementAgePos = retirement * -1;
        return `Congratulations ${firstName} you already retired ${retirementAgePos} years ago 😎` 
    }
    else {
        return `Congratuations ${firstName} you are retiring this year 🎉`  
    }
    
    // return retirement;
    // return `${firstName} retires in ${retirement} years`//Can only ommit return if 1 liner function
}

console.log(yearsUntilRetirement(1995, "Matt"));
console.log(yearsUntilRetirement(1950, 'Mike'));
console.log(yearsUntilRetirement(1958, "Lindsey"));