// SCOPE

// Always exists in the environment where we are writing out code
// Deals with how we have access to certain things
// var a = 'hello'; // global scope

// function hello() {
//     console.log(a); // function scoped
// }

// hello();

// var myName = 'global'; //func1

// function function1() {
//     myName = 'func1';
//     console.log(myName); // 
// }

// function1();
// console.log(myName); // func1;

// Scope can always look outwards, but never inwards

var myName = 'global';

function function1() {
    var myName = 'func1';
    console.log(myName);
}

function function2() {
    // var myName = 'func2';
    console.log(myName);
}

// console.log(myName);   // ? global
// function1();           // ? func1
// function2();           // ? func2
// console.log(myName);   // ? func2

var myFavoriteFood = "pizza";

function outer() {
  var myFavoriteFood = "ramen";

  function inner() {
    console.log(myFavoriteFood);
  }

  inner(); // "ramen";
}

// inner(); 

var num = 2017; // sets the variable to the global scope
// console.log(num); // 2017

// window = [0,1,2];


function func() {
    var school = 'bootcamp prep';
    // return school;
}

func();
// console.log(func()); // bootcamp prep


// let & const

// Global Scope (value/function that can be used anywhere in the entire program)
// File/module scope (the value/function can only accessed within the file)
// Function Scope (var)
// Block Scope (value/function is only accessible within code block) {...}
    // let & const

function scopes() {
    var myName = 'Jae';

    for (var i = 0; i < myName.length; i++) {
        var char = myName[i];
        // let char = myName[i];
        console.log(char);
    }
    console.log(char);
    console.log(i);
}

// scopes();


// const arr = []
// arr.push(1);
// console.log(arr);
// // const arr = [];
// arr = [1,2,34]

// var bar = 5;
// console.log("1: " + bar); //1: What will bar be on this line? // 5

// function foo() {
//     var bar = 10;
//     console.log("3: " + bar); //3: What will bar be on this line? 10

//     var innerFoo = function() {
//         bar = 15;
//     }

//     console.log("4: " + bar); //4: What will bar be on this line? 10
// }

// console.log("2: " + bar); //2: What will bar be on this line? 5
// foo();
// console.log("5: " + bar); //5: What will bar be on this line? 5


// var bar = "dance";

// function foo() {
//       bar = 10;

//       var innerFoo = function() {
//         var bar = 15;
//       }

//       console.log("2: " + bar); //2: What will bar be on this line? 10
//     //   console.log(innerFoo()); // undefined
//       innerFoo();
//       console.log("3: " + bar); //3: What will bar be on this line? 10
// }

// console.log("1: " + bar); //1: What will bar be on this line? "dance"
// foo();
// console.log("4: " + bar); //4: What will bar be on this line? dance // 10 



var a = 5;

function inner(a) { // parameters defined var functionally scoped
    a = a + 10
    return a;
}

// console.log(a); // 5
// console.log(inner(10))
// console.log(a); // 20




/* 
Write a function that takes in a string and replaces all L's, M's, O's with underscores

Assume: all strings will be lowercase

removeLMO('look at my code') => '___k at _y c_de'

*/

function removeLMO(str) {
    var triggers = 'lmo';
    var newStr = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (triggers.includes(char)) {
            newStr += "_";
        } else {
            newStr += char;
        }
    }

    return newStr;
}

// function removeLMO(str) {
//     var words = str.split(" "); // ['look', 'at', ...]
//     var replaced = [];

//     for (var i = 0; i < words.length; i++) {
//         var word = words[i]; // 'look'
//         var newWord = wordLook(word);

//         replaced.push(newWord);
//     }

//     return replaced.join(" ");
// }

// function wordLook(word) { //'look'
//     var underscored = '';
//     for (var i = 0; i < word.length; i++) {
//         var char = word[i];

//         if (char === 'l' || char === 'm' || char === 'o') {
//             underscored += "_"
//         } else {
//             underscored += char;
//         }
//     }

//     return underscored; // '___k'
// }

// console.log(removeLMO('look at my code'))