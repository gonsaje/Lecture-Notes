// SCOPE

// Deals with how we have access to certain things
// var a = "hello"; // global scope
function sayHi() { //function
    var arr = [1,2,3];
    let count = 0; // function scope

    for (let i = 0; i < 2; i++) { // for block
        count += 1;
    }

    console.log(count);
}

// sayHi();
// function salutations() {
//     console.log(a);
// }
// salutations();
// console.log(a);

// Global Scope -> accessible from anywhere
// File Scope
// Function Scope
// Block Scope

// var // function scope
// let & const // block scope

// Scope can always look outwards, but never inwards

var myName = 'global';

function function1() {
    var myName = 'func1';
    console.log(myName);
}

function function2() {
    var myName = 'func2';
    console.log(myName);
}

// console.log(myName);   // 'global'
// function1();           // 'func1'
// function2();           // 'func2'
// console.log(myName);   // 'global'

var myFavoriteFood = "pizza";

function outer() {
    var myFavoriteFood = "ramen";

    function inner() {
        console.log(myFavoriteFood);
    }

    inner();
}

// outer(); //

var myFavoriteFood = "pizza";

function outer() {
      var myFavoriteFood = "ramen";

      function inner() {
        console.log(myFavoriteFood);
      }

      inner();
}

// inner();

// num = 1800;
// console.log(num); // 

// Defining variables without key words: Polluting global scope


var myVar = 'App Academy'; //
var myVar = "Hello" // Variable Redefinition

function func() {
    myVar = 'Bootcamp Prep'; // Variable Reassignment
}

// console.log(myVar);   // 'App Academy'
// func();
// console.log(myVar);   // 'App Academy'

//naming collision


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

var bar = "dance";

function foo() {
      bar = 10;

      var innerFoo = function() {
        var bar = 15;
      }

      console.log("2: " + bar); //2: What will bar be on this line? 10
      innerFoo();
      console.log("3: " + bar); //3: What will bar be on this line? 10
}

// console.log("1: " + bar); //1: What will bar be on this line? dance
// foo();
// console.log("4: " + bar); //4: What will bar be on this line? 10

var a = 5;

function inner(a) { //10 
   
    a = a + 10
    console.log(a);
}

function repeatWord(word) {
  var sum = 0
  for (var i = 0; i < 5; i++) {
      sum = sum + 1
  }
    
}


console.log(a); // 5
inner(10) // => 20
console.log(a); // 20 / 5