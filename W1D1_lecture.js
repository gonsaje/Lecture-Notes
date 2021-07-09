// Primitive Data Types
// Primitive Data types are immutable

// Strings

// "hello"
// 'hello'
// `hello`

// "kevin's"
// 'please insert you "name" here'

// All strings have a truthy value except an empty string ("")

// Indices & Length
//   "hello"
// L: 12345
// I: 01234



// "hello nice to meet you im in bootcamp prep".length - 1 => last index of a string

// <string>[indexNum] => returns character stored at the specific index

// "hello"[1] => 'e'
// "hello"[2] =>'l'
// console.log("kevin likes to see the koalas at the zoo"["kevin likes to see the koalas at the zoo".length - 1]); 

// string.length => returns the length of string
// "hello".length => 5

// Built-In Methods for Strings

// <string>.toUpperCase()=> returns a uppercased version of the string (does not change original string)
// console.log("hello world".toUpperCase()); // camelCase => first word is all lowercase and all following words are titleized

// <string>.toLowerCase()=> returns a lowercased version of the string (does not change original string)
// console.log("GOODBYE MOON".toLowerCase());

// <mainStr>.indexOf(<searchStr>) => return the index of the first instance of searchStr in mainStr (if not found then returns -1)
// What is the index of searchStr in mainStr
// <mainStr> is the string we are searching thru
// <searchStr> is the string we are searching for
// console.log("hello".indexOf("l"));
// console.log("kevin likes to see the koalas at the zoo".indexOf("hoala"));

// <mainStr>.includes(<searchStr>) => return a boolean (true/false) if the  searchStr is in mainStr 
// console.log("hello".includes("x"));
// console.log("kevin likes to see the koalas at the zoo".includes(" at"));

// <string>.slice(start, end) // returns a sliced string from start index (inclusive) up to end index (exclusive)
// the end index is optional => if no end index is inputted, it will slice from the start all the way to the end
// console.log("hello".slice(1, 3)) // => "ell"
// console.log("hello world".slice(2)); // => "llo world"

// Numbers

// Operators: +, -, *, /
// Modulo Operator (%) => gives back the remainer of a division problem
// console.log(10 % 3); // 1
// console.log(30 % 2); // 0
// console.log(3 % 12); // 3

// PEMMDAS

// Booleans (Truthy & Falsey)

// Falsey values: false, 0, "", undefined, null, NaN (not a number)

// Comparisons:
// <, >, <=, >=
// console.log("hello".length <= 3);

// === strict comparison: checks for both same value and same data type
// == loose comparison: tries to find a point of equivalence
// ! Bang operator => negates whatver it is added to
// !== not equals

// console.log(!false);
// console.log(3 !== '3');
// console.log(3 == '3');

// OR operator || => only one side of the statment has to be true for it return true
// AND operator && => both sides of the statement must be true for it return true


// console.log("hello".length === 5 || "aeiou".includes("b")); // true || false => true
// console.log("hello".length === 5 && "aeiou".includes("b")); // true && false => false

//  AND takes precedence over the OR

// console.log((6 % 2 !== 0 || 6 % 4 === 0) && 15 % 3 == 0 || 15 % 5 === 0 && 7 % 3 === 1); // false || false && true || true && true  =>    false || false || true   =>    true

// Undefined/Null

// Null (human input) => as a placeholder to indicate a falsey/empty value
// Undefined (computer output) => is returned when something is defined, but no holds no value

// Type Coercion

// Explicit:
// console.log("5");
// console.log(Number("5"));
// console.log(Boolean(11));
// console.log(String(4));

// Implicit:

// console.log(5.0 + "");
// console.log(6 + "dogs");
// console.log(2 + "2");
// console.log(!0);
// console.log(3 * 'chocolate');

// Variables
// storage containers that can be evaluated

// var myNum = 24; // outdate
// let num = 25;
// var str = "hello";

// console.log(num);
// // console.log(str);

// var str = "hello world"; // variable redefinition
// str = "goodbye moon"; // variable reassignment

// console.log(str);


let num2 = 36;
// console.log(num2 - 1);
// num2 = num2 - 1;
// console.log(num2);
// num2 -= 1; // num2 = num2 - 1;
// console.log(num2);
// num2 += 5;
// console.log(num2);
// num2 /= 3;
// console.log(num2);
// num2 *= 2;
// console.log(num2);


// Post-fix vs. Pre-fix (always moves variable by 1 value)
// num2++; // num2 -= 1 OR num2 = num2 - 1 (postfix)
// console.log(num2); // 37
// num2--;
// console.log(num2) // 36

// console.log(num2++);
// console.log(num2);
// console.log(++num2);
// console.log(num2);


let greeting = "bonjour"; // hello, bongiorno, hola, hey, hi

// console.log(greeting[0]);
// let lastIndex = greeting.length - 1;
// console.log(greeting[lastIndex]);
// greeting = greeting.slice(1).toUpperCase();
// console.log(greeting);

// console.log(greeting.indexOf("j"));

// Conditionals
// Each conditional chain can only have 1 'if' statement and 1 'else' statement, but as many 'else if' statements

/* 

if (<conditiional>) { // if this conditionals returns true*
    <code block 1> // this block of code will execute*
} else { // else serves as a catch-all if the previous conditional doesnt return true
    <code block 2>
}

if (<conditiional>) { // if this conditionals returns true*
    <code block 1> // this block of code will execute*
} else if () {
    <code block 2>
} else { // else serves as a catch-all if the previous conditional doesnt return true
    <code block 3>
}
*/

// let number = 5;
// check if a number is even
// if (number % 2 === 0) {
//     console.log(true);
// } else if (number === 5) {
//     console.log(number);
// } else {
//     console.log(false);
// }

// /////////////////////////////

// if (number % 2 === 0) {
//     console.log(true);
// } 

// if (number === 5) {
//     console.log(number);
// }

// if (number % 2 !== 0) {
//     console.log(false);
// }


// If the string is at least 10 characters (10 or greater) print "long string"
// If it is shorter than 10 but longer than 5 print "medium string"
// Otherwise print "short string"

// let exampleStr = "book";

// if (exampleStr.length >= 10) {
//     console.log("long string");
// } else if (exampleStr.length <= 9 && exampleStr.length >= 5) {
//     console.log("medium string");
// } else {
//     console.log("short string");
// }

// let num3 = 30;

// if (num3 % 3 === 0 ) {
//     console.log('divisible by 3');
// } else if (num3 % 5 === 0) {
//     console.log('divisible by 5');
// } else if (num3 % 5 === 0 && num3 % 3 === 0) { // unreachable
//     console.log('divisible by 5 and 3');
// } else {
//     console.log("other");
// }


// let num4 = 30;

// if (num3 % 5 === 0 && num3 % 3 === 0) {
//     console.log('divisible by 5 and 3');
// } else if (num3 % 5 === 0) {
//     console.log('divisible by 5');
// } else if (num3 % 3 === 0) { 
//     console.log('divisible by 3');
// } else {
//     console.log("other");
// }


// We want to check if we left a good tip
// If the tip is 15% or greater of the bill => print "good tip"
// otherwise "bad tip"
// bill * .15

// let tip = 14;
// let bill = 70;
// let minTip = bill * .15;

// if (tip >= minTip) {
//     console.log("good tip");
// } else {
//     console.log("bad tip");
// }


// Your wife is asking you to help out around the house.
// You tell her you'll help her if she says it nicely.
// If the string ends with a '!' => say "please stop yelling"
// otherwise => say "i can help"



let request = 'hey';
// console.log(request[0]);
let lastIdx = request.length - 1;
let lastChar = request[lastIdx];

if (request[request.length - 1] === '!') {
    console.log("please stop yelling");
} else {
    console.log("i can help");
}