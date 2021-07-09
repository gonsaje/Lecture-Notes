//  Recursion

// Call Stack
// A data sructure that handles all code executions

function hello() {
    console.log('hello');
}

// hello();

function f1(num) { // execution flow: current line being executed
    f2(num + 1); // paused function: the function is waiting
    console.log(num); 
}
  
function f2(num) {
    // execution context: the values available to a function
    f3(num + 1); // paused
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
// If a problem can be solved recursively, it can also be solve iteratively

// Anatomy of a Recursive Function
//  - BaseCase
//  - Different Input on each recursive call => moves us closer to the base case
//  - return statement => ends recursive call

// for (let i = 4; i < Infinity; i += 2) {
//     if (i === 10) {
//         console.log("All Done");
//         break;
//     }

//     console.log(i);
// }

// count from given number up to 10
function countUp(num) { // 10 
    if (num >= 10) { // BaseCase
        console.log("All Done!");
        return; // Return Statement to break call
    }

    countUp(num + 1); // Different Input to get closer to base case
    console.log(num);
}

// countUp(4);

// Common Downfalls of Recursion
// - No Basecase/ wrong BaseCase
// - forgetting to return or returning the wrong thing
// - stack overflow (beefy functions, different input doesn't move towards basecase, etc.)


// Print all Numbers greater than or equal to 0
// BaseCase: when num < 0 print "Blast Off" and end recursive call


function countDown(num) {
    if (num <= 0) {
        console.log('Blast Off');
        return;
    }

    console.log(num);
    countDown(num - 1);
}

// countDown(10);


// BaseCase: if (num === 0 || num === 1) return 1;
// 4 => 4 * 3 * 2 * 1

function factorial(num) {
    if (num === 0 || num === 1) { //  basecase
        return 1; // return statement (first stored value returned)
    }

    return num * factorial(num - 1); // recursive call w/ different input
}

// console.log(factorial(4)); // 24
// console.log(factorial(0)); // 1




// fact(4) => 4 * 6 => 24
///////CS///////

let nums = [5012, 2014, 7766, 9000];

function allEvens(arr) { // []
    if (arr.length === 0) {
        return true;
    } else if (arr[0] % 2 !== 0) { // 9000 % 2 !== 0
        return false;
    }

    return allEvens(arr.slice(1)); // different
}

console.log(allEvens(nums));