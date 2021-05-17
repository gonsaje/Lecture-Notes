// Recursion

// Call Stack 
// Data Structure that handles all code executions 

function f1(num) { // 1 // execution flow: current line being executed
    f2(num + 1); // f2(2) // paused function: the function is waiting
    console.log(num); // 1
}
  
function f2(num) {
    f3(num + 1); // paused
    console.log(num); // 2
}
  
function f3(num) {
    f4(num + 1);
    console.log(num); // 3
}
  
function f4(num) { // 4
    console.log(num);
}
  
// f1(1);

// Recursion
// What is Recursion?
// Recursion is a process (function) that calls upon itself
// If a problem can be solved recursively, it can also be solved iteratively

// Anatomy of a Recursive Function
//  - Base Case
//  - Different Input => moves us closer to base case 
//  - Return statement => ends recursive call

//count from given number up to 10
function countUp(num) { // recursive
    if (num > 4) { //  BaseCase;
        console.log("All Done");
        return;
    }

    console.log(num);
    countUp(num + 1); // Different Input
}

// function countUp(num) { // iterative
//     for (let i = num; i < 11; i++) {
//         console.log(i);
//     }

//     console.log("All Done");
//     return;
// }

// countUp(3);

// Common Downfalls of Recursion
//  - no basecase/ wrong basecase
//  - forgetting to return or returning the wrong thing
//  - stack overflow (beefy functions, different input doesnt move towards basecase, etc.)


// Print all Numbers greater than or equal to 0
// BaseCase: when num < 0 print "Blast Off" and return

function countDown(num) {
    if (num < 0) { // basecase
        console.log("Blast Off");
        return;
    }

    console.log(num);
    countDown(num - 1); // rec call with diff input
}

// countDown(10);


// Basecase: if num === 0 || num === 1, return 1
//  4 => 4 * 3 * 2 * 1

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    return num * factorial(num - 1);
}

// console.log(factorial(4)); 
// console.log(factorial(0)); // 1 

// fact(4) // => 4 * fact(3) // 24
// fact(3) // 3 * fact(2)
// fact(2) // 2 * fact(1)
// fact(1) // 1


let numbers = [5012, 2014, 7766, 9000];

function allEvens(array) {
    if (array.length === 0) {
        return true;
    } else if (array[0] % 2 !== 0) {
        return false;
    }

    return allEvens(array.slice(1)); //  [2013, 7766, 9000]
}

console.log(allEvens(numbers))