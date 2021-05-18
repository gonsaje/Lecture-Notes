// Primitive Data Types
// Primitive data types are immutable

// Strings

// "hello"
// 'hello'
// `hello`

// All strings have a truthy value except an empty string ("")


// Indices & Length
//   "hello"
// L: 12345
// I: 01234

// <string>[<indexNum>] => returns the character stored at the specific index

// console.log("Hello World"[2]);
// console.log("Hello World"[0]);
// console.log("Hello World"[1 + 3 - 2]);

// <string>.length => returns the length of a string
// console.log("hello world".length)
// console.log("hello world"["hello world".length - 1])

// Built-In Methods for Strings

// camelCase demoBootcampPrep

// <string>.toUpperCase() => returns uppercased string
// console.log("hello world".toUpperCase())

// <string>.toLowerCase() => returns lowercased string
// console.log("HeLlO wOrLD".toLowerCase())

// <mainStr>.indexOf(<searchStr>) => returns the index of the first instance of searchStr in mainStr
// If searchStr does not exist in mainStr, returns -1
// console.log("I like ice cream".indexOf("i"))
// console.log("I like ice cream".indexOf(" cream"))
// console.log("aeiou".indexOf("a")) 

// <mainStr>.includes(<searchStr>) => returns true/false based on if searchStr is in mainStr
// console.log("hello world".includes("helo")) // false
// console.log("hello world".includes("world")) // true

// <string>.slice(startIndex, endIndex) 
// => returns a sliced string from start index (inclusive) to the end index (exclusive)
// - If only input one number, slices string from startIndex all the way to the end
// - If 2 numbers inputted, first num is inclusive, second num is exclusive
// - If no input is given, gives back a shallow copy of the string

// console.log("hello world".slice(1)) // ello world
// console.log("hello world".slice(1, 7)) // ello w
// console.log("hello world".slice()) // hello world
//           012345678910


// Numbers

// Operators: +, -, *, /
// Modulo Operator: % => gives back remainder of a division problem
// console.log(10 % 3);//  3 * 3 = 9 => 1
// console.log(12 % 3);//  3 * 3 = 9 => 1

// PEMMDAS

// Booleans
// True | False

// Falsey values: false, 0, "", undefined, null, NaN (Not a Number)

// Comparisons:
// <, >, <=, >=
// console.log("hello".length > 3)

// ! (Bang Operator) => negates what ever it is added to
// console.log(!!"")
// === => strict comparison: checks for same value and same data type
// == => loose comparison: tries to find a point of equivalence somewhere
// !== => not equals
// console.log("5" === 5)
// console.log("5" == 5)
// console.log("5" !== 5)

// OR operator( || ) only one side needs to return true for the entire statement to return true
// AND operator ( && ) both sides to return true for the entire statement to return true

// console.log("hello".length === 5 || "aeiou".includes("b")); // true || false => true
// console.log("hello".length === 5 && "aeiou".includes("b")); // true && false => false

// AND takes precedence over OR

// console.log(6 % 2 !== 0 || (6 % 4 === 0 && 15 % 3 == 0) || 15 % 5 == 0); // false || false && true && true => false || false && true => false || false => false

// Undefined/Null

// Null (human input) => as a placeholder to indicate a false/empty value
// Undefined (computer output) => is returned when something is defined, but holds no value


// Type Coercion

// Explicit:
// console.log("5")
// console.log(Number("5"));
// console.log(100)
// console.log(Boolean(100));
// console.log(String(5));

// Implicit:
// console.log(5.0 + "")
// console.log(5 + "dogs");
// console.log(2 + "2");
// console.log(5 * "dogs");

// VARIABLES
// storage containers that can be evaluated

var myNum = 24; // oudated syntax
// console.log(myNum);

let myStr = "hello"; // variable definition
// console.log(myStr);


myStr = "goodbye" // variable reassignment
// console.log(myStr)

// let myStr1 = "lollipop"
// console.log(myStr1)

let num = 12;
num = num - 12; // num -= 12
num += 24;
num *= 2;
num /= 6; // 8

// console.log(num);

// Post-fix & Pre-fix: 

// Post-fix: the evaluation occurs after the execution
// num++; // num += 1
// num--; // num -= 1

// console.log(num++);
// console.log(num);


// Pre-fix the evaluation occurs before/during the execution
// ++num;
// --num;

// console.log(++num);
// console.log(num);


let greeting = "hello";

// console.log(greeting = greeting.toUpperCase()); // HELLO
// console.log(greeting);

// console.log(greeting[0] = 'c');
// console.log(greeting = "c" + greeting.slice(0));
// console.log(greeting)

// Conditionals
// A way for us to direct our code to behave in a specific manner based on a condition

// if (<conditional>) {}
// else if (<conditional>) {}
// else {}

// - Each conditional chain can only have 1 if statement and 1 else, but however many else if's that you want

let number = 3;
// if (number % 2 === 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }

// if (number % 2 === 0) {
//     console.log("even");
// } 

// if (number % 2 !== 0) {
//     console.log("odd");
// }

let str = "night";
// If the string is at least 10 print "long string"
// If shorter than 10 but longer than 5, print "medium string"
// everything else is a "short string"

// if (str.length >= 10) {
//     console.log("long string");
// } else if (str.length < 10 && str.length > 5) {
//     console.log("medium string");
// } else {
//     console.log("short string");
// }

// if (str.length % 2 === 0) {
//     console.log("even string");
// } else {
//     console.log("odd string")
// }


////////////////////////////////////////

// if (str.length >= 10) {
//     console.log("long string");
// } 

// if (str.length < 10 && str.length > 5) {
//     console.log("medium string");
// } 

// if (str.length <= 5) {
//     console.log("short string");
// }


///////////////////////////

// let num2 = 7;
// if (num2 % 3 === 0) {
//     console.log("divisble by 3");
// } else if (num2 % 5 === 0) {
//     console.log("divisible by 5");
// } else if (num2 % 15 === 0) {
//     console.log("div by 15");
// } else {
//     console.log("other");
// }



let tip = 14;
let bill = 100;

// We want to check if we left a good tip
// If the tipe is 15% or greater  => print "good tip"
// otherwise "bad tip"
// bill * .15

// if (tip >= bill * .15) {
//     console.log("good tip");
// } else {
//     console.log("bad tip");
// }

let str2 = "hello";

// if the string ends in ! => print "stop yelling"
// "i can help you"

// <string>[<index>] => returns character at specific index
// length = 6
// last index = 5
if (str2[str2.length - 1] === "!") {
    console.log("stop yelling");
} else {
    console.log("i can help you");
}

console.log("test");


