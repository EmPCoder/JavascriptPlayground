'use strict';

const calcAge = function(birthYear) { //This param is local var.
    //Returns time until retirement taking in birth year
    return 2059 - birthYear//Could also be year
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0){
        // return retirement; Doesn't work because return automatically exits
        return `${firstName} has ${retirement} years left until retirement.`
    }
    else {
        const retirementAgePos = retirement * -1;
        return `Congratulations ${firstName} you are already retired ${retirementAgePos} years ago 😎` 
    }
    // return retirement;
    // return `${firstName} retires in ${retirement} years`//Can only ommit return if 1 liner function
}

console.log(yearsUntilRetirement(1995, "Matt"));
console.log(yearsUntilRetirement(1950, 'Mike'));