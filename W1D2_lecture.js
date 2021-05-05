// Keep your code DRY => Don't Repeat Yourself
// let num1 = 2;
// let num2 = 3;
// let num3 = 4;

// console.log(num1 + 5);
// console.log(num2 + 5);
// console.log(num3 + 5);

// FUNCTIONS 
// storage container for a block of code that we want to run

//function declaration
function addFive(number) { // parameter
    return number + 5;
}

// function greet() {
//     console.log("hello");
// }

// console.log(greet());

// console.log(addFive(2)) // argument
// console.log(addFive(3))
// let result = addFive(4);
// console.log(result);

// console.log() vs. return
// console.log() => just prints a value to the terminal
// return => outputs a value from a function

function greet(name) {
    console.log("hello " + name);
}

// greet("helen")
// greet("josh")
// greet("matteo")

// function myFunc() {
//     console.log("before");
//     return "during";
//     console.log("after");

// }

// console.log(myFunc())

// let num1 = 2;
// let num2 = 4;
// function average(num1, num2) {
//     let sum = num1 + num2;
//     let avg = sum / 2;
//     return avg;
// }

// // console.log(sum)
// console.log(num1);
// console.log(num2)

// Function Expression
// treating a function as a variable

// let average = function(num1, num2) {
//     let sum = num1 + num2;
//     let avg = sum / 2;
//     return avg;
// }
// console.log(average(3, 5));


// Helper function

// function f1(num) { // 2
//     return "My number plus two is " + f2(num); // 4
// }

// function f2(num) { // 2
//     return num + 2; // 2 + 2
// }

// console.log(f1(5))

// JavaScript: when you run a file it is run twice
// the first run is for definition
// the second run is for execution


// Build me a function that takes in a number and multiplies it by 5
// If the result of that equation is greater than 50 return "big number"
// otherwise return "small number"

// function multiply(num) {
//     if (num * 5 > 50) {
//         console.log("big number");
//     } else {
//         console.log("small number");
//     }
// }

// multiply(11)
// multiply(2);

// Write a function evenOrOdd takes in a number
// If the number is even return the number multiplied by 2
// if odd return number divided by 2


function evenOrOdd(num) {
    if (num % 2 === 0) {
        return num * 2;
    } else {
        return num / 2;
    }
}

// console.log(evenOrOdd(4));
// console.log(evenOrOdd(5));





