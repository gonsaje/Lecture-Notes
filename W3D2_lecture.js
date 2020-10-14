// Scope
// Always exists in the env where we write our code 
// Deals with how we have access to certain things

function sayHi() {
    var a = "hi"; // <== defined within the function, so var a exists only in the function
}

sayHi();
// console.log(a);

var myName = 'global'; //biggest circle

function function1() { // smaller circle (inside of the biggest circle)
//   var myName = 'func1';
  console.log(myName); 
}

function function2() {
    var myName = 'func2';
    console.log(myName);
}

// console.log(myName);   // "global"
// function1();           // "global"
// function2();           // "func2"
// console.log(myName);   // "global"

// scope can never look inward, but can grab from outward

var myFavoriteFood = "pizza";

function outer() {
    //   var myFavoriteFood = "ramen";

    function inner() {
        console.log(myFavoriteFood);
    }

    inner();
}

// outer(); // "ramen"

// JavaScript will keep searching outer scopes until the variable is found or it reaches the global scope

//naming collision
// var myVar = 'App Academy';

function func() {
    // result = [];
    let myVar = 'Bootcamp Prep'; // reassigning the global myVar
}

// func(); // myVar changes once we've invoked the function
// console.log(myVar);   // "App Academy"
// console.log(myVar);   // "Bootcamp Prep"

// var is used to scope variables to the current scope (function)
// Never defining your variables is polluting the global scope

// var bar = 5;
// console.log("1: " + bar); //1: What will bar be on this line? 1: 5

// function foo() {
//     // var bar = 10;
//     console.log("3: " + bar); //3: What will bar be on this line? 5

//     var innerFoo = function() {
//         bar = 15; //scoped to innerFoo
//     }
//     innerFoo();
//     console.log("4: " + bar); //4: What will bar be on this line? 15
// }

// console.log("2: " + bar); //2: What will bar be on this line? 5
// foo();
// console.log("5: " + bar); //5: What will bar be on this line? 15

// closures
// whenever we define a function, a function closes around the info that it surrounds

var a = 5;
function inner(b) { // an implicit var when working with args
    a = a + 10;
    console.log(a);
}

// console.log(a); // 5
// inner(10); 
// console.log(a); // 5

// let & const
// other ways to declare vars in JS

//scope:
// var is function scoped
// let & const are block scoped

// const => constant
// cannot be changed

function countUp() { // function 
    var sum = [];
    const obj = {};
    let hi = "hi";
    for (let i = 0; i < 5; i++) { // block
        // sum.push(i);
        hi = [];
        var sum = "asdas";
    }

    console.log(sum);
}

countUp();

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
