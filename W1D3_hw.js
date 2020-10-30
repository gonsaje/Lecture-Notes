// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.

function logBetween(lowNum, highNum) {
    for (var i = lowNum; i <= highNum; i++) {
        console.log(i); //0
    }
}


//
// Examples:
//
// logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
//
// logBetween(14, 6); // prints nothing
//
// logBetween(4,6); // prints
// 4
// 5
// 6

//////////////////////////////////////////

// logBetweenStepper
// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.
//

function logBetweenStepper(min, max, step) {
    for (var i = min; i <= max; i += step) {
        console.log(i);
    }
}

// Examples:
//
// logBetweenStepper(5, 9, 1) // prints
// 5
// 6
// 7
// 8
// 9
//
// logBetweenStepper(-10, 15, 5) // prints
// -10
// -5
// 0
// 5
// 10
// 15

///////////////////////////////////////////////////////

// printFives
// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional
//

function printFives(max) {
    for (var i = 0; i < max; i += 1) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}

// function printFives(max) {

// }

// Example:
//
// printFives(20) // prints
// 0
// 5
// 10
// 15

//////////////////////////////////////

// printReverse
// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
//

function printReverse(min, max) {
    for (var i = max - 1; i > min; i--) {
        console.log(i);
    }
}

// Examples
//
// printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
// printReverse(90, 94) // prints
// 93
// 92
// 91

/////////////////////////////////////

// sumNums
// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
//

function sumNums(max) { // 4
    var total = 0;

    for (var i = 1; i <= max; i += 1) {
        total += i; 
    }

    return total;
}

// Examples:
//
// console.log(sumNums(4)); // => 10
// console.log(sumNums(10)); // => 55
// console.log(sumNums(365)); // => 66795

//////////////////////////////////////

// isFactorOf
// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//

function isFactorOf(number, factor) {
    return number % factor === 0;
}

// Examples:
//
// console.log(isFactorOf(6,2)); // => true
// console.log(isFactorOf(-6, 2)); // => true
// console.log(isFactorOf(5,0)); // => false
// console.log(isFactorOf(22, 7)); // => false


// fizzBuzz
// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
//

function fizzBuzz(max) {
    for (var i = 0; i < max; i++) {
        if ((i % 3 === 0 && i % 5 === 0)) {
            continue;
        } else if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}

// Examples:
//
// fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18

///////////////////////////////////////

// isPrime
// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Examples:
//
// console.log(isPrime(2)); // => true
// console.log(isPrime(10)); // => false
// console.log(isPrime(11)); // => true
// console.log(isPrime(9)); // => false
// console.log(isPrime(2017)); // => true

//////////////////////////////////////////

// Loop Muscle Memory
// Practice typing the syntax for loops! Type each snippet 5 times.
// Focus on using proper style and indentation. 
// Be sure to test your code by running it after each repetition. 
// You'll be surprised and also annoyed at what details you missed! 
// Learn from those typos.


function printForwards(start, end) {
  for (var counter = start; counter <= end; counter++) {
    console.log(counter);
  }
}

// printForwards(4, 11); // feel free to change the numbers being passed

function printBackwards(start, end) {
  var i = end;
  while (i >= start) {
    console.log(i);
    i--;
  }
}

// printBackwards(-5, 6); // feel free to change the numbers being passed

// How will these programs evaluate?
// Predict what will happen in the code below, and then run the code to find out!

function func1(num) { // 5
  return num + 50; //55
}

function func2(num) { // 55
  return num + " bottles of beer on the wall"; // "55 bottles...""
}

function func3(num) { // 5
  var x = func1(num); // func1(5) => 55
  return func2(x); //func2(55)
}

var result = func3(5);
// console.log(result); // What does this print out?

var foo = function(name) { // "Anthony"
  return "Dance " + name + ", dance! " // "DAnce Anthony, dance!"
}

var bar = function() {
  var str = "";

  for (var i = 0; i < 3; i += 1) {
    str += foo("Anthony");
    str += foo("Haseeb");
    str += foo("Winnie");
    str += " | ";
  }

  return str;
}

var result = bar();
// console.log(result); // What does this print out?


// Debug The Programs
// The following functions don't give the expected output, can you spot the problems?

function sayHiNTimes(n) {
  var i = 0;

  while (i < n) {
    console.log("Hi");

    i++;
  }
}



function isFive(n) {
  if (n === 5) {
    return true;
  } else {
    return false;
  }
}

// Truth Tables
// Complete the tables and check your work in the REPL.

// x	    y	    z	     x && y || z	    x && (y || z)
// true	    true	false	 true               true    
// true	    false	false	 false	            false           
// false	true	false	 false              false	
// false	false	false	 false              false    

// x	    y	    z	      x || y && z	    x || (y && z)
// true	    true	false	  true	            true
// true	    false	false	  true	            true
// false	true	false	  false             false
// false	false	false	  false             false	