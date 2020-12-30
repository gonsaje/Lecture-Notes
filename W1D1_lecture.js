// Primitive Data Types
    // They are all immutable 
// Strings
    // All strings except an empty string has a truthy value
    // "hello"
    // 'hello'
    // `hello`
    // console.log("hello world, I AM LEARNING TO CODE".indexOf("h"));
    // .toUpperCase();
    // function makeUserName(name) { // 'kegan g'
    //     var str = ""

    //     str += name[0].toUpperCase();
    // } // KGee
    // .toLowerCase();
    // .length;
    // indices and length are offset by one
        // index starts 0
        // while length starts with one

    // .indexOf();
        // returns the first occurrence of a character or element in a string
        // when a character/string doesnt exist within the string it returns -1
        // console.log("hello".slice(0, 3)); //

    // .slice(beginningIndex, endingIndex);
        // begIndex is inclusive, while endIndex is exclusive
        // when only one index is inputted, we receive a sliced copy beginning at the index and everything trailing.
        // will return a slice copy of a certain segment of a string;
        // one argument is necessary and the second is not

    // var str = 'hello';
    // console.log(str + "h");
    // console.log(str);

    
// Numbers

// console.log(2 * 10 % 3);

// number operations +, -, /, *;
// PEMDAS
// modulo operator (%): returns the remainder of division
// if the first number is smaller than the second number 
    // we'll always return the first number
    // modulo has the same precendence as mult/div

// Booleans
// true
// false

// console.log(Boolean(-29));
// console.log(Boolean(null));

// Truthy Values & Falsey Values
    // Undefined, Null, NaN, 0, '', False

// Null : empty value or no value (human input); intentional return 
// Undefined : a var or function may be defined but has been assigned (computer output)

var num = null;
var num1;

// console.log(num);
// console.log(num1);

// Comparisons

// >, <, >=, <=

var str = "Kegan G";
var str1 = "KEGAN G"
// console.log(5 < 20);
// console.log(str === str.toUpperCase() || str1.length <= 5 && str1[0] === 'K'); // false || false;
// str1.length <= 5 && str1[0] === 'K' => false

// (===) strict comparison: checks for equal value and same datatype
// (==) loose comparison: tries convert one side to the other / we will not be using this

// AND && operator: both sides of the AND must be true to return true; takes precendence over OR
// OR || operator: only one side has to equate to true to return true;

// console.log(20 >= 40);


// Variables
// a way for us to save data types as information;

var myNum = 5; // trailing camelCase 
var str1 = "hello";


// console.log(myNum /= 4); // myNum = myNum + 4
// console.log(myNum);

// console.log(myNum++); //postfix return or print the original value
// // myNum = myNum + 1 // myNum += 1
// console.log(myNum);
// console.log(--myNum); // prefix return the altered value
// console.log(myNum)

// console.log(str1 += "h")
// console.log(str1);



// reassignment

var str2 = "goodbye";
// console.log(str2)

// Conditionals

// direct our code to run a certain logic based on conditions that we set

var myUserName = "JSONG12345";
var myUserName1 = "Jacob";
// cut all usernames that are longer than 5
// if (myUserName.length <= 5) { // if username is less than 5 print
//     console.log(myUserName);
// } else if (myUserName === myUserName.toUpperCase()) { // check if usname is uppercase
//     console.log(myUserName);
// } else {
//     console.log(myUserName.slice(0, 5));
// }

// var num1 = 3;

// if (num1 === 0) {
//     console.log(num1 + ' is Zero!')
// } else if (num1 > 10) {
//     console.log(num1 + " is greater than 10")
// } else if (num1 % 2 === 0) {
//     console.log(num1 + ' is even!')
// } else {
//     console.log(num1 + ' is odd!')
// }
// Undefined
// Null


// console.log(true && false || true); 
// console.log('Jacob Prall'[6])
//           0123456

// console.log("hello".length === 5 && 'hello' === 'hello'.toLowerCase()); // 

var num2 = 8;

if (num2 < 7) {
    num2 += 3 // num2 = num2 + 3
} else {
    num2 - 2;
}
// console.log(num2);

// help me write code where if a strings length is even we print even / odd if odd

// var str = "good"

// if (str.length % 2 === 0) {
//     console.log("string is even");
// } else {
//     console.log("string is odd");
// }

// help me write code where we check to see if the first letter of a string is uppercased

// var str1 = 'denny' // D

// if (str1[0] === str1[0].toUpperCase()) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// number is less than 10 print 'small'
// number is less than or equal 50 ' medium'
// everything above 50 is 'large'

// var num = 4;
// var num = 12;
// var num = 75;
// if (num < 10) {
//     console.log('small');
// } else if (num <= 50) {
//     console.log('medium');
// } else {
//     console.log('large');
// }

// ! Bang operator
// console.log(!false);
// var num = 7
// console.log(num > 4 && !(num % 2 === 0));

var str = 'JacobP';

// if the strings is even print the first 4 chars
// if the strings is odd print the first 3 chars

if (str.length % 2 === 0) {
    console.log(str.slice(0, 4));
} else {
    console.log(str.slice(0, 3));
}

