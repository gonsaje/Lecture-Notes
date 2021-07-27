// Recursion

// Call Stack
// A data structure that handles all code executions
// First In, Last Out


function hello() {
    console.log("hello");
}

// hello();



/*
      


            f1(1)
//////////CALL STACK///////////
 */

function f1(num) { // 1 // execution flow: current line being executed
    f2(num + 1); // f2(1 + 1) // paused function
    console.log(num);
}

function f2(num) { // 2
    // execution context
    f3(num + 1); // f3(2 + 1)
    console.log(num);
}

function f3(num) { // 3
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
// - BaseCase/EdgeCase | Situations that lie beyond the logic or would break the logic
// - Different Input on each recursive call => moves us closer to the base case
// - Return statement => ends recursive call


// iteratively
// for (let i = 1; i < 10; i -= 2) { // different input
//     if (i >= 10) { // basecase
//         // console.log("All Done!");
//         break; // return 
//     }

//     // console.log(i)
// }



// recursively

// Count from a given number up to 10

function countUp(num) {
    if (num >= 10) {
        console.log("All Done");
        return; // end
    }

    countUp(num + 1);
    console.log(num);
}

// countUp(4)

// Common Downfalls of Recursion
// - No BaseCase / Wrong BaseCase
// - Forgetting to return or returning the wrong thing
// - Stack Overflow (beefy functions, different input doesn't move towards basecase, etc.)

// Print all Numbers greater than or equal to 0
// BaseCase: when num < 0 print "Blast OFF" and end recursive call

function countDown(num) {
    if (num < 0) {
        console.log("Blast Off");
        return;
    }

    console.log(num);
    countDown(num - 1);
}

// countDown(10);


// BaseCase: if (num === 0 || num === 1) => return 1;

function factorial(num) { // 4
    if (num <= 1) {
        return 1;
    }

    return num * factorial(num - 1);
}


console.log(factorial(4)); // 24 => 4 * 3 * 2 * 1 => 24
console.log(factorial(0)); // 1






//////////////CALL STACK//////////////