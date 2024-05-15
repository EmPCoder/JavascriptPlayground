'use strict';

//Parent scope = global scope, why it sees firstName
function calcAge(birthYear) {
    const age = 2024 - birthYear;

    //Creates new scope
    function printAge() {
        const output = `Hi ${firstName}, You are ${age}, born in ${birthYear}`
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            //Creating new var with same name as outer scope's variable
            const firstName = 'Lindsey'; //JS will look for variable firstName in current scope.
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            // let output = 'New Output!' //Redefining output var defined above. 
            const output = 'New Output!'; //Reassigning outer scope's variable.
        }
        console.log(output);
        // console.log(str); Const and let vars are block scoped variables.
        console.log(millenial); //Can find var variables because they are function scoped
        // add(2, 3); //Wont find while in strict mode because of function scope
    }
    printAge();

    // console.log(firstName);
    return age;
}

const firstName = 'Matt'; //Global var firstName
calcAge(1995);
// console.log(age); //Throws error because only innerscope can have access
// printage(); Not defined in scope