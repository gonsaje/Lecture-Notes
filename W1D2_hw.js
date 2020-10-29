// Coding Problems
// For the problems below, write functions that satisfy the examples. 
//Write your code to a .js file so you can save it. 
//Feel free to copy and paste our starter code snippets into your file. 
//Be sure to test your code by using console.log to see what your functions return!

// isOdd
// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true

// function isOdd(num) {
//   if (num % 2 === 0) {
//       return false;
//   } else {
//       return true;
//   }
// }

function isOdd(num) {
    return num % 2 !== 0;
}

// console.log(isOdd(2));
// console.log(isOdd(5));
// console.log(isOdd(-17));

// plusFive
// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// plusFive(10);  // => 15
// plusFive(2);   // => 7
// plusFive(-8);  // => -3
//

function plusFive(num) {
    var sum = num + 5;
    return sum;
}

// console.log(plusFive(10));
// console.log(plusFive(2))
// console.log(plusFive(-8))

// threeOrSeven
// Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//
// Examples:
// threeOrSeven(3);   // => true
// threeOrSeven(42);  // => true
// threeOrSeven(8);   // => false
//
// function threeOrSeven(num) {
//     if (num % 3 === 0 || num % 7 === 0) {
//         return true;
//     } else {

//         return false;
//     }
// }

function threeOrSeven(num) {
    return num % 3 === 0 || num % 7 === 0;
}

// console.log(threeOrSeven(3))
// console.log(threeOrSeven(42))
// console.log(threeOrSeven(8))

// hello
// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log
//
// Examples:
// hello("child");    // prints "Hello, child"
// hello("Anthony");  // prints "Hello, Anthony"
//
function hello(str) {
  console.log('"' + "Hello, " + str + '"');
}




// yell
// Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.
//
// Examples:
// yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
// yell("Time to program"); // => "TIME TO PROGRAM!!!"
//
function yell(string) {
  return string.toUpperCase() + "!!!";
}

// console.log(yell("I want to go to the store"))
// console.log(yell("Time to program"))

// whisper
// Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."

function whisper(string) {
    return "..." + string.toLowerCase() + "...";
}

// console.log(whisper("Hey Anthony"))
// console.log(whisper("YEA! that was fun"))

// isSubstring
// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false
//
function isSubstring(searchString, subString) {
    var lowerCase = searchString.toLowerCase();
    var low2 = subString.toLowerCase();
    return lowerCase.indexOf(low2) > -1;
}

// console.log(isSubstring("The cat went to the store", "he cat went"))
// console.log(isSubstring("Time to program", "time"))
// console.log(isSubstring("Jump for joy", "joys"))

// echo
// Write a function `echo` that takes in a string and returns that string "echo-ized".
//
// Examples:
// echo("Mom!"); // => "MOM! ... Mom! ... mom!"
// echo("hey"); // => "HEY ... hey ... hey"
// echo("JUMp"); // => "JUMP ... JUMp ... jump"
//
function echo(string) {
    var allUpper = string.toUpperCase();
    var allLower = string.toLowerCase();
    return allUpper + "..." + string + "..." + allLower;
}

// console.log(echo("Mom!"))
// console.log(echo("hey"))
// console.log(echo("JUMp"))


// isEven
// Write a function `isEven` that takes in a number and returns `true` if the number
// is even, `false` otherwise. Write `isEven` by using the `isOdd` function you
// made previously. HINT: you can call `isOdd` from within `isEven`.
//
// Examples:
// isEven(2); // => true
// isEven(5); // => false

function isEven(num) {
    if (isOdd(num)) {
        return false;
    }
    return true;
}


// console.log(isEven(2))
// console.log(isEven(5))


// averageOfFour
// Write a function `averageOfFour(num1, num2, num3, num4)` that takes in four
// numbers. The function should return the average of all of the numbers.
//
// Examples:
//
// averageOfFour(10, 10, 15, 5); // => 10
// averageOfFour(3, 10, 11, 4); // => 7
// averageOfFour(1, 2, 3, 4); // => 2.5

function averageOfFour(num1, num2, num3, num4) {
    var sum = (num1 + num2 + num3 + num4);
    var avg = sum / 4;
    return avg;

}

// console.log(averageOfFour(10, 10, 15, 5))
//////////////////////////////////////////////////////////////////////////////////////////////////

// Function Muscle Memory
// Practice typing the syntax for functions. Type each snippet 10 times. 
// Focus on using proper style and indentation. 
// Be sure to test your code by running it after each repetition. 
// You'll be surprised and also annoyed at what details you missed! Learn from those typos.

function sayHello(name) {
  var msg = 'Hello, ' + name + '. How are you?';
  return msg;
}

// console.log(sayHello('Sam')); // feel free to change the string being passed

function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

// console.log(checkNumber(5)); // feel free to change the number being passed


///////////////////////////////////////////////////////////////////////////////////////////////////////


// Thinking Problems
// These next few problems won't require you to write code, but it will help your understandng of JavaScript.

// Order of Operations
// Evaluate each expression. Check your answer in the Node REPL.

// 1 + 1 * 5 // 6

// (1 + 1) * 5 // 10

// 1 + 2 - 5 / 6 - 1 // 1.1666666666666665

// 5 * 5 % 13 // 12

// 5/(-1 * (5 - (-10))) // -0.3333333333333333

// Truth Table
// Based on the values of A and B from the first two columns, complete the truth table. 
// Check your work in the REPL.

// A	  B	        A && B	 A || B
// True	  True	    True	 True
// True	  False		False    True
// False  True		False    True
// False  False		False    False


// Truthy or Falsey
// Predict whether these expressions evaluate to true or false. Check your work in the REPL.

// true && true || false // true
// true && (false || true) // true
// (true || false) && (false || false) // false
// (true || false) || (false || false) // true