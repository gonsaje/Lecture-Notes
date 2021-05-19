
// Keep your code DRY => Don't Repeat Yourself

// let num1 = 2;
// let num2 = 3;
// let num3 = 4;

// console.log(num1 += 5);
// console.log(num2 += 5);
// console.log(num3 += 5);

// Functions
// Storage container for a block of code that we want to run

// function declaration
function sayHello(name) {  // parameter
    console.log("hello " + name);
}

// console.log(sayHello("Frankelin")); // arguments
// sayHello("Ulises");
// sayHello("Brooke");
// sayHello("Sala");
// sayHello("Al");
// sayHello("Ry");

// console.log() vs. return
// console.log() => prints a value to the terminal
// return => outputs a value from a function and ends a functions call

function greet(name) {
    console.log("before");
    return "hello " + name;
    console.log("after");
}

function addFive(num) {
    return (num + 5);
}

// console.log(addFive(4));

// If no return is found in a function, the function returns undefined

// console.log(greet("Frankelin")); // arguments
// console.log(greet("Ulises"));
// console.log(greet("Al"))
// console.log(greet("Brooke"));
// console.log(greet("Sala"));
// console.log(greet("Al"));
// console.log(greet("Ry"));

// Function Expression
let farewell = function(name) {
    return "Au revoir " + name;
};

// Blocks of code
function checkNumber(num) {
    if (num % 2 === 0) {
        return 'is even';
    }

    return "is odd";
}

let result = checkNumber(3)
let result2 = checkNumber(2)
// console.log(result);
// console.log(result2);

// Helper Functions

function f1(num) {
    return "My number plus two is " + f2(num);
}

function f2(num) {
    return num + 2;
}

// console.log(f1(4));

function isEven(num) {
    return num % 2 === 0;
}

// if (isEven(2)) {
//     console.log("even")
// } else {
//     console.log("odd");
// }


/* 
Build me a function that takes in a number and multiplies it by 5
If the result of that equation is greater than 50 return "big number"
otherwise return "small number"
*/

function multiply(num) {
    let result = num * 5;

    if (result > 50) {
        return "big number";
    }
        
    return "small number"
}

// console.log(multiply(11))
// console.log(multiply(1))



// function totalPoints(twoPointers, threePointers)  {
//     let twoTotal = twoPointers * 2;
//     let threeTotal = threePointers * 3;
//     let total = twoTotal + threeTotal;

//     return total;
// }

// console.log(totalPoints(5, 6)); // 28


/* 
Write a function that takes in a bill and a tip
and checks if the given tip is 15% or greater than the given bill.
If it is return "good tip"
otherwise return "bad tip"
*/

function tipTotal(bill, tip) {
    let baseline = bill * .15;

    if (tip >= baseline) {
        return "good tip";
    } else {
        return "bad tip";
    }
}

console.log(tipTotal(20, 5));