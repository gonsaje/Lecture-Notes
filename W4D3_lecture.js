// Recursion

// Call Stack
// A data structure that handle all code executions
// First In, Last Out

function hello() {
    console.log("hello");
}

// hello();


function f1(num) { // execution flow: current line being executed
    f2(num + 1); // paused function: 
    console.log(num);
}

function f2(num) {
    f3(num + 1);
    console.log(num);
}

function f3(num) {
    f4(num + 1);
    console.log(num);
}

function f4(num) {
    console.log(num);
}

// f1(1);



// What is Recursion?
// Recursion is a process (function) that calls upon itself
// If a problem can be solved recursively, it can also be solved iteratively

// Anatomy of a Recursive Function
// - BaseCase/EdgeCase | Situations that lie beyond the logic or would break the logic
// - Different Input on each recursive call => move us closer to the base case
// - Return statement => end the recursive call

// iterative example

// for (let i = 1; true; i += 1) { // different input
//     if (i >= 8) { // basecase
//         console.log("All Done");
//         break; // return statement
//     }

//     console.log(i)
// }


// recursive example

function countUp(num) {
    if (num >= 3) { // basecase
        console.log("All done");
        return; // break recursive call
    }

    countUp(num + 1); // different input
    console.log(num);
}

// countUp(1)

//////CALL STACK//////

// Common Downfalls of Recursion
// - No BaseCase / Wrong BaseCase
// - Forgetting to return or returning the wrong thing
// - Stack Overflow (beefy functions, different input doesn't move towards basecase, etc.)

// Print all numbers greater than or equal 0


function countDown(num) {
    if (num <= 0) { // base case
        console.log("Blast Off!");
        return; // return statement (end recursion)
    }

    console.log(num); // current num
    countDown(num - 1); // decrement (different input)
}

// countDown(-112);
/* 
10
9
8
.
.
.
"Blast Off!"
*/

// Recursively find the factorial of a given number

function factorial(num) {
    if (num === 1 || num === 0) { // basecase
        return 1;
    }

    return num * factorial(num - 1);
}

console.log(factorial(4)) // => 4 * 3 * 2 * 1 => 24 | 4 * 3! => 3! => 3 * 2!
// console.log(factorial(1)) // => 1 
// console.log(factorial(0)) // => 1
// console.log(factorial(15))
// console.log(factorial(6))
// console.log(factorial(7))


// factorial(4) => 4 * 6 => 24
////Call Stack/////////////////
