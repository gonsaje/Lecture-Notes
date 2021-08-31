// Math Object

// console.log( Math.max(0, 12, 34, -98) );
// console.log( Math.min(0, 12, 34, -98) );

// let numsArr = [13, 23, -42, 100, 12];

// console.log( Math.min(...numsArr) );

// spread operator ( ... ) => tells JS that the input passed has the possibility to be more than one input

// console.log( Math.floor(2.99999999) ); // always rounds down a number to the nearest integer
// console.log( Math.ceil(2.00001) ); // always rounds up a number to the nearest integer
// console.log( Math.round(2.4) ); // traditional rounding

// console.log( Math.sqrt(36) ); // square root
// console.log( Math.pow( 2, 3 ) ); // Math.pow( <base>, <exponent> )

// console.log( Math.abs(-134) ); // absolute value
// console.log( Math.floor( Math.random() * 100) ); // generates a random decimal between 0 & 1 (exclusive)

// console.log( Math.PI );
// console.log( Math.sign(0) ); // if value is positive returns 1, if negative return -1, if zero return 0

// Callbacks | Higher Order Functions

// A higher order function is a function that receives another function as a parameter/argument
// A callback is a function that is passed in as an argument to a HOF

function example(cb) { // higher order function

    console.log('before');

    cb();

    console.log("after");
}

function exampleCallback() {
    console.log("I am the callback");
}

// example(exampleCallback)

function f1(cb, str) { // sayGoodbye, 'Alligator'
    var result = cb(str); // sayGoodbye("Alligator") => See ya later Alligat
    console.log('result of callback: ' + result); 
}

function sayGoodbye(name) { // 
    return 'See ya later, ' + name;
}

function respond(name) { // 
    return 'After a while, ' + name;
}

// f1(sayGoodbye, 'Alligator'); // 
// f1(respond, 'Crocodile');    // 

// Callbacks vs. Helper functions

// Callbacks => they are part of a HOF's main functionality
// Callbacks can change based on what functions is inputted

// Helper => not strictly necessary
// aids a function logic/complexity
// wil always be the same function regardless of the call

function addAndCall(num1, num2, cb) { // 10, 2, double
    var sum = num1 + num2; // 9
    return cb(sum); // Math.sqrt(9) => 3
}

function yellAnswer(answer) {
    console.log(answer + ' IS THE ANSWER!');
}

  function double(num) {
    return num * 2;
}

// addAndCall(40, 2, yellAnswer);  // 
// addAndCall(1, 1, console.log);  // 
// console.log(addAndCall(10, 2, double) ); // 
// console.log(addAndCall(7, 2, Math.sqrt) ); // 


///////////////////////////////////////////////////////////////////

// Callback Methods (Built-In Methods for Arrays)

/* 

<array>.forEach()

Another way to iterate over an array
cannot use continue, break***

********************Order Matters******************
First Parameter => element
Second Parameter => index
Third Parameter => entire array

*/

let nums = [1,2,3,4,5];
let evens = [];

// nums.forEach( function(ele) {
//     console.log( "ele is " +  ele );

//     if (ele % 2 === 0) {
//         evens.push(ele);
//     }
// //     console.log( "              index is  " + banana );
// //     console.log("                                       array is " + tomato);                          
// })

// console.log(evens);
// fat arrow function

nums.forEach( (ele) => {
    // console.log( "ele is " +  ele );                
})


/*
<array>.map()

Returns a new array with each element of the original array
modified by the anonymous call back function

 */

let nums2 = [ 5, 6, 7, 8, 9];

function doubled(arrOfNum) {

    let doubledArr = arrOfNum.map((num) => {
        return num * 2;
    })

    return doubledArr;
}

// console.log( doubled(nums2) );

let nums3 = [1,2,3,4,5];
let strs = ["a", "b", "c"]

function plusTwo(arr) {

    let two = arr.map( (char) => {
        return char + "e";
    }
    
    )

    return two;
}

// console.log( plusTwo(strs));

/* 

<array>.filter()

Returns a new array of elements that return true when passed
to the anonymous callback function

*/

let nums4 = [10, 20, 30 , 43, 55];

function allEvens(arr) {
    let evensArr = arr.filter( (num) => {
        // return num % 2 === 0;

        if (num % 2 === 0) {
            return true;
        }
        return false;
    } )

    return evensArr;
}

// console.log(allEvens(nums4));


/* 

<array>.every()

Returns true if all elements in the array return true when passed
to the anon callback function

returns false if even one element returns false;

*/

let nums5 = [1, 2, 3, 4, 5];

let result = nums5.every( (num) => {
    return num > 0;
});

// console.log(result);

/* 

<array>.some()

Returns true if even one element in the array returns true when passed
to the anon callback function

returns false if even all elements returns false;

*/

let nums6 = [-1, -2, -3, -4, 5];

let result2 = nums6.some( (num) => {
    return num > 0;
});

// console.log(result2);