// Primitive Data Types of JS:
//  - Strings
//      - text in js

"hello";
'hello';
`hello`;

//every string is also true except and empty string ''

// console.log("HELLO, I'm hungry!".slice(5, 8)); // 'h'
'they said, "hello!"'
// indices start from the number 0 
// console.log() // built-in method (part of the JS language)

// .toUpperCase() // to invoke a method/function use ()

// Properties of strings: .length

// indexOf(arg) // receives an argument (what char we're looking for) returns index 
// or -1 if char isn't found in the string

// .slice(arg1, arg2) needs at least one num. 1st num is start of slice (inclusive)
// 2nd num is end of slice (exclusive)


//  - Numbers

// console.log((14 + 2) % 5);
// normal operations of +, -, *, /
// every number has the boolean value of true except zero
// modulo (%): returns remainder of division 
// modulo has same priority in PEMDAS as MD
// parenthesis, exponents, mult/div/modulo, add/sub


//  - Boolean
true // 1
false // 0

// console.log(Boolean(-29))

// every data type in JS has a Boolean value

//  - Null (falsey value) human input

// when null is returned
// intentional absence of a value

//  - Undefined (falsey value) computer output

// something is wrong
// something expected wasn't found

//Comparisons

// >, <, >=, <=
// console.log('hello'.length === 5);

// strict comparison ( === ) checks for equal value and same data type 
// loose comparison ( == ) tries to convert one side to the other/ we will not be using this
// When checking for more than one condition:
// AND ( && ) ex. 3 * 20 === 60 && 2 - 2 === 0 checks for both sides to be true (all sides must be true)
// OR ( || ) is either side true... only one side needs to be true


// VARIABLES
// a way for us to store these data types as information

var myString = 'hello'; // trailing camelCase
// first word is lowercase and every following word is defined by a capital
myString = 'world';
// console.log(myString.length);

var myNum = 42;
// myNum = myNum + 5; // 42 + 5 // right side of reassignment is eval first
// myNum += 5; // same as myNum = myNum + 5
// myNum++ // same as myNum += 1 or myNum = myNum + 1
// myNum-- // postfix add/sub
//prefix performs operations before console.log
// console.log(myNum++);
// console.log(myNum);

// CONDITIONALS
var num = 60

if (num > 99) {
    console.log('large number');
} else if (num > 50) { // if the first if returns false
    console.log('medium num');
} else if (num > 20) {
    console.log('med-small')
} else {
    console.log('small num');
}

//only one if and only one else, but as many else-if's as you'd like


// if (num > 0) {
//     console.log('positive');
// } 
// if (num < 0) { // if the first if returns false
//     console.log('negative');
// } 
// if (num === 0) {
//     console.log('zero');
// }





