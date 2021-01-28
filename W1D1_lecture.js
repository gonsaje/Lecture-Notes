// Primitive Data Types:
// All primitive Data types are immutable

// Strings'

// 'hello' 
// "hello" 
// `hello`

// Every String has a boolean value of true except an empty string

// console.log("hello world, I'm learning to code")
// console.log('he said, "hello"')

// Indices & Length

// console.log("hello".length);

// Index starts from 0 
// Length starts from 1
//     "hello"
// L:   12345
// I:   01234

// Index into strings using brackets <string>[<index>]

// console.log("hello"[0]);
// console.log("hello"["hello".length - 1]); // "hello"[5]

// To grab the last index of a string
// We can run <string>.length - 1

// String Built-In Methods

// <string>.toUpperCase()
// console.log("HeLlo".toUpperCase());
// console.log("HELLO".toLowerCase());

// var greet = "hello";
// console.log(greet[0] = 'j');
// console.log(greet);

// <string>.length returns the length of string

// <string>.indexOf(<input>) returns the index of the first instance of the input
// when indexOf cannot find the input in the string => returns -1

// console.log("hello".indexOf("hello"));

// <string>.includes(<input>) => returns true or false based on the existence of input in string
// console.log("hello".includes("e"))

// <string>.slice(<start>, <end>)
// returns a sliced version from the start index (inclusive) to end index (exclusive)
// <end> index isn't strictly necessary
// if only a <start> index is inputted, .slice() will return a string from the start index to the end
// if no input is put in, .slice() returns a shallow copy of the string


// console.log("hello".slice(1, 3)); // "el"
// console.log("hello".slice());

// camelCase

// Numbers

// operators: +, -, *, /
// modulo (%): gives us the remainder of division

// console.log(3 % 14)

// PEMMDAS
// modulo has same priorityu as mult/div

// console.log(4 * 12 % 5)    // 6
// console.log((4 + 12) % 5)  // 1

// Boolean
// true
// false

// console.log(Boolean("hello"))

// Every Data rtpe in JS has a Boolean value

// falsey values:

//  false, '', 0, null, undefined, NaN

// null means empty or no value present
// null is explicitly assigned (human input)

// undefined means something has been declared but not yet defined (computer output)

// Comparisons

//  any comparison results in a boolean
// >, <, >=, <=
// === / ==
// strict comparison (===): checks for equal value and same data type
// loose comparison (==): tries to convert one side to the other
// ! (NOT) => inverses the boolean of whatever its attached to
// !== => not equals
// !=

//  || (OR) only one side has to return true
// && (AND) both sides must return true
// AND takes precedene over OR


// console.log((5 > 3 || 2 * 5 === 11) && 2 === 2)

// Type Coercion

// Implicit
// console.log(123);
// console.log("fish" + 123);

// // Explicit
// console.log(String(123) + 5);
// console.log(Number('hello'));
// console.log(Boolean(123))


// VARIABLES
//  Everything in JavaScript can be evaluated
// variables are containers that can be evaluated
//  variables always evaluate to the value they contain

// assign and initialize a variable

var myNum;
myNum = 42;
// console.log(myNum);

// console.log(myNum + 1);
// myNum = myNum + 1;
// myNum += 1;
// myNum -= 10;
// myNum *= 2;
// myNum /= 6;

// myNum++; // myNum += 1
// myNum--;

// console.log(--myNum); // postfix => performs the operation after the console.log
// // console.log(++myNum); // prefix => performs operation before console.log
// console.log(myNum);

// var greeting = "hello";
// console.log(greeting)

// CONDITIONALS
//  a way for us to direct our code to behave in a specific manner based on a condition

// if (condition) {<code>}
// else if (condition) {<code>}
// else {<code>}

var num = 20

// if (num + 2 === 3) {
//     console.log("Branch 1");
// } else {
//     console.log("Branch 2");
// }

// if (num < 0) {
//     console.log('negative');
// } else if (num > 0) {
//     console.log('positive');
// } else {
//     console.log('zero');
// }

// if (num <= 5) {
//     console.log("small");
// } else if (num > 5 && num <= 20) {
//     console.log('medium');
// } else if (num > 20 && num <= 50) {
//     console.log('large')
// } else {
//     console.log('mega');
// }


// if (num > 0) {
//     console.log('positive');
// }

// if (num < 0 || num === 20) {
//     console.log('negative');
// } 


// var num = 10;

// if (++num > 10) {
//     console.log('ding');
// } else {
//     console.log('none');
// }
// console.log(num); 
