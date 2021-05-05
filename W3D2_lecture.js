// SCOPE

// Always exists in the enviornment where we are writing our code
// Deals with how we have access to certain things

function f1() { // function scope
    let a = "hi"
    console.log(a);

}

// f1();
// console.log(a);

// Global Scope => accessible any where in code
// File/module Scope
// Function Scope
    // var 
// Block Scope
    // let & const
    // const => constant

["hello", "bye"]

function printNums(array) {
    

    for (let i = 0; i < array.length; i++) { // i is scoped to this for loop
        var str = array[i];
        // console.log(i++)
        // number++;
    }


    for (let i = 0; i < array.length; i++) {
        let str = array[i];
    }// scoped to this for loop
    // console.log(number);


    // console.log(number);
    // console.log(i);
}

// printNums();

// let myName = 'global'
// console.log(myName);

var myName = 'global';

function function1() {
    var myName = 'func1';
    console.log(myName);
}

function function2() {
    var myName = 'func2';
    console.log(myName);
}

// console.log(myName);   // global
// function1();           // func1
// function2();           // func2
// console.log(myName);   // global

// Inner Scopes have access to variables in Outer scopes
// but outer scopes do not have access to inner scopes
// (Scope can look out but not in)



// JavaScript will keep searching outer scopes until the variable is found
//  or it reaches the global scope

// var a = 'hi'; // outer scope

// function f2() {
//     // var a = "bye";
//     console.log(a); // inner scope
// }

// f2();


// var myFavoriteFood = "pizza";

// function outer() {
//     // var myFavoriteFood = "ramen";

//     function inner() {
//         console.log(myFavoriteFood);
//     }

//     inner();
// }

// outer();

// What happens when we don't use var/let/const?
// let user = {name: "Richard"}
// num = user.name; // bad! Polluting the global scope

// console.log(num);

// DANGEROUS b/c we can accidentally overwrite something in the global scope

// naming collisions

// var is used to scope variables to the current scope (function)

var myVar = 'App Academy';

function func() {
    myVar = 'Bootcamp Prep';
    console.log(myVar)
}

// console.log(myVar);   // ?
// func();
// console.log(myVar);   // ?


var bar = 5;
// console.log("1: " + bar); //1: What will bar be on this line? 5

function foo() {
    var bar = 10;
    console.log("3: " + bar); //3: What will bar be on this line? 10

    var innerFoo = function() {
        bar = 15;
    }
    innerFoo();
    console.log("4: " + bar); //4: What will bar be on this line? 10
}

// console.log("2: " + bar); //2: What will bar be on this line? 5
// foo();
// console.log("5: " + bar); //5: What will bar be on this line? 5


    //   var a = 5;

    //   function inner(a) { //  arguments/parameters of functions are also variables
    //     a = a + 10
    //     console.log(a);
    //   }

    //   console.log(a); // 5
    //   inner(10) // 15
    //   console.log(a); // 5


