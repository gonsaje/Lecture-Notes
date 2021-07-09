// DRY => Don't Repeat Yourself

let num1 = 2;
let num2 = 3;
let num3 = 4;
// console.log(number1);
// console.log(num1 += 5);
// console.log(num2 += 5);
// console.log(num3 += 5);

// Functions
// Storage container for a block of code that we want to run

// function declaration
function sayHello(name) { //parameter: variables/placeholders for data that the function uses
    console.log("say hello " + name);
}

// sayHello('Ulises'); //argument
// sayHello('Kevin');
// sayHello('Jae');

// console.log() vs return
// console.log() => prints a value to the terminal/console
// return => outputs a value from a function ends a function call

function greet(name) {
    console.log('before1');

    return 'Bonjour ' + name;
    console.log('after');
}

function greet2(name) {
    console.log('before2');

    console.log( 'Bonjour2 ' + name);
    console.log('after2');
}

// console.log(greet('Ulises'));
// let result1 = greet('Ulises');
// let result2 = greet2('Ulises');

// console.log(result1); // 'Bonjour Ulises'
// console.log(result2); // undefined

// If no return is found in a function, the function returns undefined

// Function Expression
let sayFarewell = function(name) {
    return 'Goodbye ' + name;
}

// Blocks of code 
function checkNum(number) { //  function block
    if (number % 2 === 0) { //  if block
        return 'is even'
    } 

    return "is odd";
}

let result3 = checkNum(3);
let result4 = checkNum(4);
// console.log(result3);
// console.log(result4);

// Helper Functions

function f1(num) {
    return "My number plus 3 is " + f2(num);
}

function f2(num) {
    return num + 3;
}

// console.log(f1(4));



/* 
Build me a function that takes in a number and multiplies it by 5
If the result of that equation is greater than 50 => return 'BIG NUMBER'
otherwise return 'small number
*/

function multi(num) {
    if (num * 5 >= 50) {
        return 'BIG NUMBER';
    } 
    return 'small number';
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
Gameplan:

receive 2 nums (A)
    - one number represents the quantity of twopoint shots 
    - the other number represents the quantity of threepoint shots

find total of twoPointers
find total of threePointers
add both totals

return finalTotal (B)
*/

function totalPoints(twoPointers, threePointers) {
    let twoTotal = twoPointers * 2;
    let threeTotal = threePointers * 3;
    let finalTotal = twoTotal + threeTotal;
    return finalTotal;
}

// console.log(totalPoints(15, 10));

// Is it my chore?
// For this challenge, you will be given a string. 
// If the task given tells you not to do something it is not your chore.
// Otherwise it is your chore 

/* 

use an if to check => looking for 'Do not'

*/

function isMyChore(str) {

    if (str.indexOf('Do not') === 0) {
        return 'is not your chore (false)'
    }

    return 'it is your chore (true)';
}

// Examples
console.log(isMyChore("Do not wash the dishes")) //➞ false
console.log(isMyChore("Clean the dishes")) //➞ true
console.log(isMyChore("Do not walk the dog")) //➞ false
console.log(isMyChore("Go pick up Donald")); // -> true
console.log(isMyChore("Dump out the water")); // -> true
console.log(isMyChore("Tell everyone: 'Do not step on the grass'")); // true