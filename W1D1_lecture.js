// Primitive Data Types
// Primitive data types are immutable

// Strings
// "hello"
// 'hello'
// `hello`
// console.log("hello");

// All strings have a truthy value except an empty string '' 
// An empty string is a falsey value

// Indices & Length
//   "hello"
// L: 12345
// I: 01234

// <string>[index] => return the character stored at the specific index place
// <string>.length => return the length of the attached string
// console.log("hello"[2]);
// console.log("hello"["hello".length - 1]);
// "hello world, my name is jae and im learning how to code".length - 1

// String Built-In Methods

// <string>.length // property
// returns length of string
// "hello world".length => 11

// <string>.toUpperCase() // camelCase
// returns uppercased string
// console.log("hEllo".toUpperCase());


// <string>.toLowerCase() // camelCase
// returns lowercased string
// console.log("HeLlO".toLowerCase());

// <string>.indexOf(<searchString>)
// returns the index of the first instance of the searchString in the main string
// returns -1 if it doesn't exist in string
// console.log("hello".indexOf("l"));
// console.log("hello".indexOf("ell"));
// console.log("hello".indexOf("xul"));

// <string>.includes(<searchString>);
// returns true/false based on whether searchString exists in string
// console.log("hello".includes("low"));

// <string>.slice(start, [end])
// returns a sliced string from start index (inclusive) to end index (exclusive)
// console.log("hello world".slice(2));
// console.log("hello world".slice(2, "hello world".length - 1));
// console.log("hello world".slice()) // no input creates a shallow copy of the string

// Numbers

// Operators: +, -, *, /
// modulo operator (%) => returns the remainder of division
// console.log(5 % 3) 
// PEMMDAS

// Booleans
// True/False

// Falsey Values: false, 0, "", null, undefined, NaN

// console.log(Boolean(0))

// comparisons:
//  <, >, <=, >=
// ! (Bang) => not 
// console.log(!false)
// === => strict comparison => checks for same value and same data type
// == => loose comparison => tries to find a point of equivalence somewhere
// !== => does not equal

// console.log("5" === 5);


// || (OR) Only requires one side to be true to return true
// && (AND) Requires both sides to be true to return true
// && takes precedence over the || 
// console.log(10 % 2 === 0 || (10 % 5 !== 0 && 3 === 3))
//              true             false        true

// Undefined / Null

// Null (human input) => as a placeholder to indicate that a value is missing
// Undefined (computer output) => is returned when something is defined but holds no value

// Type Coercion

// Implicit

// console.log(2 + "fish");// => converting number to string
// console.log(2 + "2");

// Explicit

// console.log(Boolean("hello"))
// console.log(4)
// console.log(Number("hello"))
// console.log(2 * 'fish')
// NaN => Not a Number


// VARIABLES
// storage containers that can be evaluated

// var myNum2 = 48 // oudated syntax
let myNum = 24;
// console.log(myNum);
// myNum = myNum + 12; // variable reassignment
// myNum /= 12;
// console.log(myNum);

// Postfix // the evaulation occurs ater the execution
// myNum++ // myNum += 1
// myNum-- // myNum -= 1

// Prefix //  the evaulation happens during the execution
// ++myNum
// --myNum

// console.log(++myNum);
// console.log(myNum)

// let greeting = "Hello World";
// console.log(greeting.toLowerCase())

// Conditionals
// a way for us to direct our code to behanve in a specific manner based on a condition

// if (condition) {
// } else if (condition) {
// } else {
// }

// A condtional chain must only have 1 if-block & 1 else-block
//  However can have as many else-if's
let num1 = 14;
// if (num1 % 2 === 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }


// if (num1 % 3 === 0) {
//     console.log('three');
// } else if (num1 % 5 === 0) {
//     console.log('five');
// } else if (num1 % 5 === 0 && num1 % 3 === 0) {
//     console.log("divisible by both");
// } else {
//     console.log("nothing");
// }

//conditional chain returns one thing

if (num1 % 3 === 0) {
    console.log(true);
}

if (num1 % 5 === 0) {
    console.log(true);
}

//adjacent conditionals are both checked

let str = "goodnight moon";

//  if the string is longer than 10 characters then print :long
// less than 10 but longer than 5 => "medium"
// "short"

// if (str.length >= 10) {
//     console.log("long");
// } else if (str.length < 10 && str.length >= 5) {
//     console.log("medium");
// } else {
//     console.log("short");
// }


let tip = 1.5;
let bill = 15;

// Variable Naming => camelCase & practice goodnaming => be descripive but not too much

let alexNum = 5;

// bill * .15
// if our tip is 15% or greater => return "good tip"
// return "bad tip"

if (tip >= bill * .15) {
    console.log("good tip");
} else {
    console.log("bad tip");
}