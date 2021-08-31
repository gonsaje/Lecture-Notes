// Primitive Data Types
// Primitive data types are immutable

// Strings

// "Hello World"
// 'Goodbye Moon'
// `Salutations`

// All strings have a truthy value except an empty string ( "" )

// Indices & Length
//    "hello"
// L:  12345
// I:  01234

// Tip: If you need to find the last index place,
// Take the length of the string and subtract 1;

// Built-IN Methods for Strings

// <string>[<indexNum>]
// console.log( "hello world"[6] ); // 'l'

// <string>.length
// console.log("hello world".length);
// console.log( "hello world"["hello world".length - 1] );

// <string>.toUpperCase(); // camelCase
// Returns string to uppercase
// Does not modify original string
// console.log( "heLlo wOrld".toUpperCase() );

// <string>.toLowerCase(); // camelCase
// Returns string to lowercase
// Does not modify original string
// console.log( "GOoDBYE MoON".toLowerCase() );

// <mainString>.indexOf( <searchString> );
// Returns the first index place of searchString in mainString
// If not found, returns a -1
// search for sub strings
// console.log( "hello world, i am learning to code".indexOf("I") ); // 

// <mainString>.includes( <searchString> );
// Returns a boolean, based on existence
// True if found,
// False if not found
// console.log( "hello world, i am learning to code".includes("i am") ); // 


// <string>.slice( <startIndex>, <endIndex> )
// returns a sliced string from the start index (inclusive)
// up to the end index (exclusive)
// - End index is optional
// If no input is given, then returns entire string
// console.log("hello world, blah".slice(2, 7)) // ell

// Lowercase string and Uppercase strings are considered
// 2 different things.
///////////////////////////////////////////////////////

// Numbers

// Operators: +, -, *, /
// Modulo (%) : the remainder of a division problem
// console.log( 13 % 3 ); 

// PEMMDAS

// Booleans (Truth & False)

// falsey values: false, "", 0, undefined, null, NaN
// Comparisons:
// <, >, <=, >=
// console.log("bye".length >= 5);
// console.log(23 % 2 === 0);

// === strict comparison: checks that both sides are the same value and same data type
// == loose comparison: tries to find a point of equivalence **will not be using**
// ! Bang Operator => negates whatever it is attached to
// !== not equals

// Connect more than 1 comparison
// OR operator ( || ) => only one side of the the statement needs to be true
// AND operator ( && ) => both sides of the statement need to true

// console.log( ("hello".length === 5) && ( 3 % 2 === 0) &&  true ); //  true

// The AND takes precedence over the OR

// Undefined / Null
// Null (human input) => placeholder to indicate empty/falsey value
// Undefined (computer output) => is returned when something defined but doesn't hold value


// Type Coercion

// Explicit:
// console.log( Boolean(0) ); // String => Boolean
// console.log( Number( "13" ) ); // String => Number
// console.log( String( 1000 ) ); // Number => String


// Implicit:
// console.log( 5 + 'dogs'); // converting the number to be part of the string
// console.log(2 + "2"); // => '22'
// console.log(!"hello");
// console.log(2 * 'fish');

///////////////////////////////////

// Variables
// storage containers that can be evaluated

var num1 = 24; // outdated keyword 
// console.log(num1);
let str1 = "hello"; // try to use let 
// console.log(str1)

let myVar = "hello world";

// console.log(myVar.indexOf("hello"));

let myNum = 36; // variable definition (assign value to variable)
myNum + 4; // 36 + 4 => 40 // w/o reassignment, the action is not saved
myNum = myNum + 4; // variable reassignment
myNum += 4; // myNum = myNum + 4;
myNum -= 5;
myNum *= 10;
myNum /= 2;

// console.log(myNum); //

let myStr = "hello";
myStr = myStr + " world";
myStr += ", I am coding in JS"; // concatenation

// console.log(myStr);

let num = 0;
// Post-fix & Pre-fix (increment/decrement number in values of one)

// Post-fix
// console.log("POST ");
// console.log(num++); // num += 1 | num = num + 1 // 0
// console.log(num); // 1
// console.log(num--); // num -= 1 | num = num - 1 // 1
// console.log(num) // 0
/////////////////////////
// console.log("        PRE")
// Pre-fix
// console.log(++num); // num += 1 | num = num + 1
// console.log(num); // 1
// console.log(--num); // num -= 1 | num = num - 1
// console.log(num) // 0


// Conditionals 
// Each conditional chain can only have:
// 1 "if"-block
// how every many "else if"-block
// 1 "else"-block (optional)


/* 
if (<condition1>) {
    <code1>
} else {
    <code2>
}



if (<condition1>) {
    <code1>
} else if (<condition2>){
    <code2>
} else if (<condition3>) {
    <code3>
} else {
    <code4>
}

*/


// When we build a conditional train, we only get one output out of the entire chain
// However, if we put 2 adjacent next to each other we can get more than 1 output

/* 

if (condition1) {
    code1
}

if (condition2) {
    code 2
}

*/

let exampleNum = 15;

if (exampleNum > 25) {
    console.log('Big Number');
} else if (exampleNum > 10) {
    console.log("medium number" );
} else if (exampleNum === 7) {
    console.log("Lucky Seven");
} else {
    console.log("small num");
}

if ((exampleNum % 5) === 0) {
    console.log("Big number Is a factor of 5")
}

// Order does matter in a conditional chain

if (exampleNum % 3 === 0) {
    console.log('factor of 3');

} else if (exampleNum % 5 === 0) {
    console.log("factor of 5" );

} else if (exampleNum % 15 === 0) { // 15 45 60
    console.log("both");

} else { // catchall
    console.log("nothing");
}
