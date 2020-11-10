// Strings vs. Arrays 
// Strings are immutable
// Arrays are mutable

var str = "hello";
str[1] = "x";
// console.log(str);

var arr = ["h", "e", "l", "l", "o"];
arr[1] = "x";
// console.log(arr);

function xVowels(string) {
    var vowels = "aeiou";
    var chars = string.split("");

    for (var i = 0; i < chars.length; i++) {

        if (vowels.includes(chars[i])) {
            chars[i] = "x";
        }
    }

    return chars.join("");
}

// console.log(xVowels("banana")) // => "bxnxnx"

// string.split("") // converts a string into and array
// .join() // converts array into a string

String()
// console.log(true)

// console.log(Number("34a"));

// console.log(parseInt("34a"))

// console.log(typeof {id:["435"]})

// console.log(Array.isArray([1, 2, 3])); //true or false


// take in a number and return a new number with each digit incremented by 1
function addOneToEach(num) { // 25
    var numStr = String(num); // "25"
    var newStr = ""; // 

    for (var i = 0; i < numStr.length; i++) {
        var digitStr = numStr[i]; // "2"
        newStr += Number(digitStr) + 1; // "" += 2 + 1
    }

    return parseInt(newStr); // 36
}

// console.log(addOneToEach(25)); // => 36
// console.log(addOneToEach(183)); // => 294
// console.log(addOneToEach(5248)); // => 6359

function numsToDash(str) {
    var nums = [0,1,2,3,4,5,6,7,8,9];
    // var nums = "0123456789"
    var newStr = ""; 
    
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        var numifiedChar = Number(char);

        if (nums.indexOf(numifiedChar) > -1) {
            newStr += "-";
        } else {
            newStr += char;
        }
    }

    return newStr;
}
// console.log(Number("a"))
// console.log(numsToDash('ab3dk9h')); // => 'ab-dk-h'
// console.log(numsToDash('r576tyi')); // => 'r---tyi'

Math.abs(-5 + 2) // Absolute Value
var speeds = [1,5,-11,0,1,2]

// console.log(Math.floor(7.0 / 2)) // Return the largest rounded down

// console.log(Math.ceil(7.0 / 2)) // rounding up

// console.log(Math.round(6.9 / 2)) // traditional rounding

// console.log(Math.max(...[1, 2, 3, 9, 4], 6, 7, 12)) // returns the greatest number 
// ... spread operator:  

// console.log(Math.min(...[1, 2, 3, 9, 4], 6, 7, 12, -18))


// console.log(Math.ceil(Math.sqrt(47)))

// console.log(Math.sign(0))

// Types of Errors:
//  - Syntax Error: Incorrect use of predefined syntax
        // - Missing bracket, parenthesis, etc.

function hello() {
    console.log("hello");
}

// hello();

//  - Reference Error: represents an error when an operation cannot be performed

// hello();


//  - Type Error

// var car = ["wheel", "windows", "engine"]

// car();

