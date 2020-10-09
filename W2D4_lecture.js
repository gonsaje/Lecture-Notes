// Object
test
// hi
//hello
// hey there
// SEEEN 
// Object.keys({key: "value"}) // => ["key"]

//Conversion between types

// str.split();
// arr.join();

// console.log(String(42))
// console.log(String(true))
// console.log(Number("a100"))
// console.log(parseInt("234abc567"))

// console.log(

//     typeof undefined
// )

// // Arrays are still considered a type of Object in JavaScript

// console.log(

//     Array.isArray(["hello"])
// )


// function addOneToEach(num) {
//     var str = String(num);
//     var result = "";

//     for (var i = 0; i < str.length; i++) {
//         var char = str[i]; // "2"
//         var num = Number(char); // 2

//         result += num + 1; 
//     }

//     return Number(result);
// }

// console.log(addOneToEach(25)); // => 36
// console.log(addOneToEach(183)); // => 294
// console.log(addOneToEach(5248)); // => 6359

// Errors

// 3 Major Errors:

// Syntax Error
// Type Error
// Reference Error

//Syntax Error
// ex. missing something vital in code
// missing curly bracket
// missing paranthesis, comma, etc.

function printHi() {
    for (var i = 0; i < 3; i++) {
        if (i === 2) {
            console.log("Hi?")
        } else if (i === 1) {
            for (var j = 0; j < i; j++) {

            }
        }
    }
}

// console.log(printHi());

//Type Errors only break on execution of code

// Operation on something of wrong type
var car = "honda";
// car();

// Reference Error only pop up on execution

//caused by typos most often

console.log(carr);



