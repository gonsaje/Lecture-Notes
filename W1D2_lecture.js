// DRY => Don't Repeat Yourself

let num1 = 1;
let num2 = 2;
let num3 = 3


// console.log( ((num1 + 5) / 2) * 500 );
// console.log( ((num2 + 5) / 2) * 500 );

// Functions
// Storage containers for a block of code that we want to run

// Function declaration

function sayHello(name) { // parameter: variable/placeholder for data that the function will use
    console.log("Hello " + name);
}

// sayHello("Marco"); // argument
// sayHello("Tumanah");
// sayHello("Katie");
// sayHello("Tashi");


// console.log() vs return
// console.log() => prints a value to terminal/console
// return => outputs a value from a function and ends the function

function greet(name) {
    console.log("before");

    return 'Bonjour ' + name;

    console.log('after');
}

// let result = greet("Zach");
// console.log(result)

// console.log(greet('Zach'))


function greet2(name) {
    console.log("before");

    console.log("Bongiorno " + name);

    console.log("after")
}
// if a function has no return statment, the function will return undefined
// console.log(greet2("tashi"))

// Function Expression
let sayFarewell = function(name) {
    return "Goodbye " + name;
}

// console.log(sayFarewell("Anna"));

// Blocks of code

function f1() { // function block

    if (!false) {
        console.log("not false");
    }

    if (true) { // if block
        console.log("true");
    }
}

// Helper Functions

function example1(num) {
    return "My result plus 3 is " + example2(num);
}

function example2(num) {
    return num + 3;
}

// console.log(example1(2))



/* 
Build me a function that takes in a number and multiplies it by 5
If the result of that equation is greater than 50 => return 'BIG NUMBER'
otherwise return 'small number
*/

/* 
Gameplan:
receving a number

multiply the received number by 5

if conditional => check if result is greater than 50
    - return "BIG NUMBER" (If the result is greater than 50)
otherwise
    return "small number"
*/

function multi(num) {
    // receving a number

    // multiply the received number by 5
    let result = num * 5;

    if (result > 50) {
        return "BIG NUMBER";
    } else {
        return "small number";
    }
    // if conditional => check if result is greater than 50
    //     - return "BIG NUMBER" (If the result is greater than 50)
    // otherwise
    //     return "small number"
}

// console.log(multi(5));
// console.log(multi(15));

/* 
Build me a function called totalPoints(twoPointers, threePointers) 
that takes in all the points that a basketball team scored.
You will receive the number of twoPoint shots and the number of threePoints shots
that were made by the team.
Return the total num of points the scored

ex.
totalPoints(3, 5) => 21
*/

/* 
receive 2 nums

calc the total of two points (create new var)
calc the toal of three points (create new var)

return a total (add two variables together)
*/

function totalPoints(twoPointers, threePointers) {
    let totalTwoPoints = twoPointers * 2;
    let totalThreePoints = threePointers * 3;

    return totalTwoPoints + totalThreePoints;
}


// console.log(totalPoints(15, 10));


// Is it my chore?
// For this challenge, you will be given a string. 
// If the task given tells you not to do something it is not your chore.
// Otherwise it is your chore 

/* 
receive a str

check if str has 'Do' => not my chore
else => not my chore
*/

function isMyChore(str) {

    if (str.indexOf("Do not") === 0) { //  if it starts with Do then executre this
        return false;
    } else {
        return true;
    }
}

// Examples
console.log(isMyChore("Do not wash the dishes")) //➞ false
console.log(isMyChore("Clean the dishes")) //➞ true
console.log(isMyChore("Do not walk the dog")) //➞ false
console.log(isMyChore("Go pick up Donald")); // -> true
console.log(isMyChore("Dump out the water")); // -> true
console.log(isMyChore("Tell everyone: 'Do not step on the grass'")); // true
console.log(isMyChore("Do your homework")); // true