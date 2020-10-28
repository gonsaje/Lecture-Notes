// FUNCTIONS

// storage container for a piece of code that we want to run
// console.log("first"); // 1
function sayHi() { // function declaration // arguments are declared vars
    console.log('HI ' + arg1);
}

// sayHi('you there'); // function invocation: calling our function // 3
// var arg1 = 'outside';
// console.log('second'); // 2
// sayHi('everyone'); // arguments: passed into a function 
// sayHi(); // undefined
// console.log('third'); // 5

// when running files in JS
// it runs and reads the code
// reads everything in the global scope (outermost layer)
// also reads declared functions, var names but not what those vars are assigned to;


// function average(num1, num2) { // multiple arguments passed in //function declaration
//     var sum = num1 + num2;
//     var avg = sum / 2;

//     if (avg > 30) {
//         return avg + ' is large!';
//     } 
    
//     if (avg > 20) {
//         return avg + ' is small!';
//     }
//     return avg + ' is tiny!';
//     // return avg; // return key word signals 2 things: stoppage of function & passes return value to where
//              // it was called
//     console.log('oops');
// }

// var result = average(50, 10); // 35 
// console.log(result); // 35

// With no explicit return value, a function returns undefined.

// Types of Function Writing

//Function Declaration
// can be called from anywhere in the file
// hello(); // hoisting: as long as functions are declared, the enviroment knows th entire contents
         // of that function 
function hello() {
    console.log('hello');
}

function hello() {
    // var average = function() {
    //     console.log('bye');
    // }
    console.log('hellw');

}

// WHen a funciton is declared the entire contents of that function is stored
// and used when the file is run through the second time and the function is invoked.

//Function Expression
// treating a func as a var

var average = function() {
    console.log('bye');

}
// hello(average); // callback function 
//var are not stored in their entirety on the first run through of the file

function f1(num) { // 1
    return f2(num); // f2(1) => 3  
}

function f2(num) { // 1
    return num + 2; // 1 + 2 => 3
}



// console.log(f1(1)); // 3 // console.log is waiting for f1 to finish

// f1 is waiting for f2 to finish
// JS is a single threaded language: for the most part it only does one thing at a time


//what happens when we run this code
    //  execution context
    //  function call stack

    
    function f1(num) {
      console.log(num); // 1
      return f2(num + 1); 
    }

    function f2(num) {
      console.log(num); // 2
      return f3(num + 1);
    }

    function f3(num) {
      console.log(num); // 3
      return num + 1
    }

    console.log(f1(1)); // 4 // complete resolution



 
function x(n, j) {
    var z = (j / n) * 100;

    if (z < 15) {
        return false;
    } else {
        return true;
    }
}

function isGoodTip(mealCost, amountTipped) {
    var percentage = (amountTipped / mealCost) * 100;
    var badTip = 15;

    if (percentage < badTip) { // beginning of new code block
        return false;
    } else {
        return true;
    }
}

// Things to keep in mind while writing functions:
//  - naming conventions: naming things applicably
//  - spacing and indentation

// RECAP:
// - function declaration vs. function expression
// - hoisting
//      - call stack
// - differences between parameters and arguments
//      - when we declare a function(var) <- parameter
//      - when a function is called func1(arg) <- argument 
// - indentation and spacing
// - 
