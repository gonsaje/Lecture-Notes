// Recursion
//  What is Recursion? Recursion is a process (a function) that calls upon itself

// Call Stack
// Data structure that handles all code executions(functions)

// function hello() {
//   console.log("hello");
// }

// hello();

function f1(num) { // 1 // execution flow: line of code being run
  f2(num + 1); // f2(2) //  paused function
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

// Anatomy of a Recursive Function
// Base Case
// Different Input

// print all numbers from num to 4

// function countUp(num) { // 1
//   if (num > 4) {
//     console.log("All Done");
//     // return;
//   }

//   countUp(num + 1); // countUp(5)
//   console.log(num);
// }

// countUp(5);

// Call Stack: countUp(1), countUp(2), countUp(3)

// Downfalls of Recursion:
// - No bascase / Wrong basecase
// - forgetting to return or returning the wrong thing
// - stack overflow


// print all numbers greater than or equal 0
// Basecase: when num < 0 print "Blast Off" and return 
function countDown(num) {
  if (num < 0) {
    console.log("Blast Off!!");
    return;
  }
  let newNum = num--; //postfix
  // console.log(num)

  console.log(newNum); // newNum => printing current num and then decrementing

  countDown(num);
}

// countDown(10);

// let num1 = 2; //2
// let num2 = num1--; // 1
// let num3 = --num1;

// console.log(num2);
// console.log(num3);

// 4
// 4 * 3 * 2 * 1

// Basecases: if num === 0 || num === 1 return 1
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

// console.log(factorial(4));// => 24

// => 24
//| CALL STACK |

// function allEven(array) { // [5012, 2013, 7766, 9000]
//   console.log(array);
//   if (array.length === 0) {
//     return true;
//   } else if (array[0] % 2 !== 0) { // 5012
//     return false;
//   }

//   return allEven(array.slice(1)); // 
// }

// console.log(allEven([5012, 2013, 7766, 9000]))


// WE need to previous numbers find the next fibonacci number
// BaseCase: if (num === 0 || num === 1) return 1
// Assume that all inputs will 0 or greater

function fibonacci(num) { // 4
  if (num === 0 || num === 1) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}
// fib(3) + fib(2)


// fibonacci => [1, 1, 2, 3, 5]
//                    2
console.log(fibonacci(2)) //=> 2
console.log(fibonacci(3)) //=> 3
console.log(fibonacci(4)) //=> 5



// fib(4) => 3 + 2

// Memoization
// as soon as a value is found, it gets stored
// ex. if we have fib(2) when we try find fib(3) or greater, we don't need to re-execute the whole stack over again