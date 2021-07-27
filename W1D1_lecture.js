// Primitive Data Types
// Primitive Data types are immutable

// Strings

// "kevin's chair"
// 'Marco said, "hello"'
// `hello`

// All strings have a truthy value except an empty string ("")

// Indices & Length
//   "hello"
// L: 12345
// I: 01234

// Built-In methods for Strings

// <string>[<indexNum>]
// console.log( "hello"[3] ); // "l"

// <string>.length: get the length of given string
// console.log("hello world".length)

// console.log( "goodbye moon, goodbye bed, doobye clock"["goodbye moon, goodbye bed, doobye clock".length - 1] ) 


// <string>.toUpperCase(); => returns an uppercased version of the string (does not change the original string)
// console.log( "hello world".toUpperCase() )

// <string>.toLowerCase(); => returns an lowercased version of the string (does not change the original string)
// console.log( "GoODbYE MoON".toLowerCase() )

// <mainString>.indexOf(<searchStr>) => returns the index of the first instance of searchStr in mainStr
// returns -1 if searchStr is never found in mainStr
// console.log( "my name is jae jae jae jae".indexOf("name") );

// <mainString>.includes(<searchStr>) => returns true if searchStr exists in mainStr, otherwise false
// console.log("We are learning JavaScript".includes("learna"))

// <string>.slice(start, <end (optional)>) => returns a segmented string from the4 start index (inclusive)
// all the way up to the end index (exclusive)
// If no end index is inputted, the slice goes all the way to the end

// console.log( "hello world".slice(1, 5) )
// console.log( "hello world".slice(1) )


// Numbers

// Operators: +, -, *, /
// Modulo ( % ) => gives back the remainder of a division problem
// console.log(2 % 11);

// PEMMDAS


// Booleans (truthy & falsey)

// falsey values: false, 0, "", undefined, null, NaN
// Comparisons:
// <, >, <=, >=
// console.log( "bye".length >= 5 )

// === strict comparison: checks that both sides are the same value and same data type
// == loose comparison: tries to find a point of equivalence
// ! Bang operator => negates whatever it is added to
// !== not equals

// OR operator || => only side of the statement has to be true to return true
// AND operator && => both sides of the statment must be true to return true

// AND takes precedence over OR

// console.log( true || false );
// console.log( true && true );

// console.log( "hello".length === 5 || "jumprope".includes("dump") && 4 !== 3 );

// Undefined / Null

// Null (human input) => a placeholder to indicate empty/falsey value
// Undefined (computer output) => is returned when something is defined but doesn't hold any value


// Type Coercion:


// Explicit
// console.log( Boolean(55) );
// console.log( Number("123"));
// console.log( String(1000) );

// Implcit
// console.log(5 + " dogs")
// console.log( 2 + "2");
// console.log(!"hello");
// console.log(2 * "fish");


// Variables
// storage containers that can be evaluated

var myNum = 5;
// console.log( myNum );
let myStr = "gummybears";
// console.log( myStr );

let myVar;
// console.log(myVar)

let str = "hello world";
// console.log( str[str.length - 1] )

let num2 = 36;
num2 = num2 + 3; // variable reassignment
num2 += 3; //42

num2 -= 10 // 32
num2 *= 2 // 64
num2 /= 8 // 8  num2 = num2 / 8;
// console.log(num2);

// let str2 = "hello";
// str2 += "world";
// console.log(str2);


// Post-fix vs. Pre-fix

// Post-fix:
// num2++; // num2 += 1 | num2 = num2 + 1
// num2--; // num2 -= 1 | num2 = num2 - 1

// console.log(num2++); // 8
// console.log(num2); // 9

// // Pre-fix:
// console.log(++num2); // 10
// console.log(num2); // 10

// console.log(str);
// console.log(str.toUpperCase());
// console.log(str);


// Conditionals
//  Each conditional chain can only have 1 "if" block and 1 "else" block, but however many "else if" blocks

// if (<condition>) {
//      <code>
// } else if (<condition2>) {
//      <code2>
// } else {
//      <code3>
// }

let exampleNum = 12;

if (exampleNum > 25) {
    console.log("REALLY BIG NUM");
} else if (exampleNum === 23) {
    console.log("it's 23");
} else if (exampleNum % 2 === 0) {
    console.log("is even");
} else {
    console.log("didn't match anything else");
}

//// Adjacent Conditionals////

if (exampleNum > 10) {
    console.log("greater than 10");
}

if (exampleNum % 2 === 0) {
    exampleNum += 2
    console.log("even");
}

console.log(exampleNum);