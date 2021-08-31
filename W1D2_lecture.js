// DRY => Don't Repeat Yourself

let num1 = 1;
let num2 = 2;
let num3 = 3;

// console.log( (num1 + 5) / 2 * 500);
// console.log( (num2 + 5) / 2 * 500);
// console.log( (num3 + 5) / 2 * 500);

// Functions
// Storage containers for blocks of code that we want to run

// Function Declaration
        // function name is the ref point
function funcName(parameter1, parameter2) { //parameters: the variables/dimensions the function is dealing with

    console.log(parameter1 + parameter2 + "inside the func"); // block of code

    return "this is the return value"; // end of the function

    console.log("after the return");
}

// let result = funcName(4, 5); // invocation (trigger the function)
// let result2 = funcName(41, 5); 
// console.log(result);

// console.log() vs return
// console.log() => prints a value to a terminal/console
// return => outputs a value from a function and ends the function

// Good Naming Conventions

function greetPerson(greeting, personName) {
    return greeting + " " + personName;
}

// console.log( greetPerson('Biongiorno', 'Mark') );
// console.log( greetPerson('Bonjour', 'Visshal') );

// Function Expression
// A function defined as a variable

let addAndMultiply = function(num1, num2) { // function block
    let sum = num1 + num2;
    let product = sum * 5;

    if (product > 50) { // if block
        let example = "hello";
        return "Big Number";
    } else if (product === 26) { // else if block

        return "26";
    }

    return "Didn't hit anything";
}

// console.log(addAndMultiply(3, 6)) ;


// Helper Functions
// To simplify a sectino of code in another function

function addTwoNums(num1, num2) {
    let sum = num1 + num2;
    let product = multiplyBy5(sum);

    if (product > 50) { // if block
        let example = "hello";
        return "Big Number";
    } else if (product === 26) { // else if block

        return "26";
    }

    return "Didn't hit anything";
}

function multiplyBy5(num) {
    return num * 5;
}

// console.log( addTwoNums(6, 8) )



/* 
Build me a function called totalPoints(twoPointers, threePointers) 
that takes in all the points that a basketball team scored.
You will receive the number of twoPoint shots and the number of threePoints shots
that were made by the team.
Return the total num of points the scored

ex.
totalPoints(3, 5) => 21

*/

// Gameplan:
/* 
receive two numbers (represents number of shots made)

multiplies 'x' num by 2 for Twopointers
multiplies 'y' num by 3 for threepointers

add those two number together

return total value of points
*/

function totalPoints(twoPointers, threePointers) {
    let twoTotal = twoPointers * 2;
    let threeTotal = threePointers * 3;
    let total = twoTotal + threeTotal;

    return total;
}

// console.log( totalPoints(3, 5) )// => 21


/* 
If the amountTipped is at least 15% of the mealCost
return good tip otherwise youre a bad tipper

GamePlan:
receive cost and tip

calc 15% of mealCost

compare good tip val w actual tip
if its equal or greater than 15% => true

otherwise => false

*/

function isGoodTip(mealCost, amountTipped) {
    let baseline = mealCost * 0.15;

    if (amountTipped >= baseline) {
        return true;
    }

    return false;
}

// console.log( isGoodTip(300, 20) );
// console.log( isGoodTip(120, 20) );


// Is it my chore?
// For this challenge, you will be given a string. 
// If the task given tells you not to do something it is not your chore.
// Otherwise it is your chore 

/* 
receive a str (sentence)

conditional (if/else)
=> see if string includes 'Do not' a the beginning

return boolean
*/

function isMyChore(sentence) {
    if (sentence.indexOf('Do not') === 0) {
        return false;
    }

    return true;
}

// Examples
console.log(isMyChore("Do not wash the dishes")) //➞ false
console.log(isMyChore("Clean the dishes")) //➞ true
console.log(isMyChore("Do not walk the dog")) //➞ false
console.log(isMyChore("Go pick up Donald")); // -> true
console.log(isMyChore("Dump out the water")); // -> true
console.log(isMyChore("Tell everyone: 'Do not step on the grass'")); // true
console.log(isMyChore("Do your homework")); // true