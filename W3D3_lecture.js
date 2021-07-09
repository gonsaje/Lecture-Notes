// Math Objects

// console.log(Math.max(1, 2, 3, 41, 5));
// console.log(Math.min(1, 2, 3, 41, 5));

// let numsArr = [ 13, 23, -42, 100, 12];

// spread operator (...) => tells JS that the input passed has the possibility to be more than one input
// console.log(Math.min(...numsArr));

// console.log(Math.floor(2.99999999)); // always rounds down a number to the nearest integer
// console.log(Math.ceil(2.12)); // always rounds up a number to the nearest integer
// console.log(Math.round(2.4)); // tradtional rounding

// console.log(Math.sqrt(36)); // square root
// console.log(Math.pow(5, 5)); // 2^2 Math.pow(<base>, <exponent>)

// console.log(Math.abs(134)); // absolute value (distance from zero)
// console.log(Math.floor(Math.random() * 100)); // a random decimal from 0 to 1 (exclusive)

// console.log(Math.PI);
// console.log(Math.sign(0)); // if the num is neg => -1, pos => 1, zero => 0


// Callbacks / Higher Order Functions

// A higher order function is a functino that receives another function as a parameter/argument
// A callback is a function that is passed in as an argument to a HOF


function example(cb) { // higher order function
    console.log('before');

    cb(); // execution of the received callback

    console.log('after');
}

function callback1() { // callback function
    console.log('during');
}

function callback2() {
    console.log("hello world");
}

// example(callback1);

// console.log("////////////////////////////////////////////////");

// example(callback2)

// console.log("////////////////////////////////////////////////");

// example(function callback3() {console.log("I am callback 3");})



function f1(cb, str) { // respond, "Crocodile"
    var result = cb(str); // respond("Crocodile") => After a while, Crocodile
    console.log('result of callback: ' + result); 
}

function sayGoodbye(name) { // Alligator
    return 'See ya later, ' + name;
}

function respond(name) { // 
    return 'After a while, ' + name;
}

// f1(sayGoodbye, 'Alligator'); // See ya later, Alligator
// f1(respond, 'Crocodile');    // After a while, Crocodile


// Callbacks vs Helper functions

/* Callbacks => they are part o the HOF's main functionality
             => Callbacks can change based on the inputted function
        
*/ 

/* 

Helper => not strictly necessary
       => aids another functions functionality
       => will always be the same function no matter the call

*/



function addAndCall(num1, num2, cb) { // 
    var sum = num1 + num2; // 
    return cb(sum); // return console.log(2)
}

function yellAnswer(answer) {
    console.log(answer + ' IS THE ANSWER!');
}

  function double(num) {
    return num * 2;
}

addAndCall(40, 2, yellAnswer);  // 42 IS THE ANSWER!!
addAndCall(1, 1, console.log);  // 2
console.log(addAndCall(10, 2, double) ); // 24
console.log(addAndCall(7, 2, Math.sqrt) ); // 3



// Callback Methods (Built-In Methods for Arrays)

/* 
<array>.forEach()

Another way to iterate over an array

****************ORDER MATTERS******************
FIRST PARAMETER => element
SECOND PARAMETER => index
THIRD PARAMETER => entire array

*/

let nums = [1, 2, 3, 4, 5];
let evens = [];
// regular function declaration
nums.forEach(function(ele) {
    // console.log("element is " + ele);
    // console.log("                       index is " + banana);
    // console.log("                                           array is" + orange);  
})

///////////////////////////////////
// fat arrow function
nums.forEach( (el, i, arr) => {
    if (el % 2 === 0) {
        evens.push(el);
        // console.log(i, arr);
    }
})

// console.log(evens);

//****************************************************** */

/* 
<array>.map()

Returns a new array with each element of the original array
modified by the anonymous callback function

*/

let nums2 = [5, 6, 7, 8, 9];

function doubled(numArr) {


    let doublesArr = numArr.map( (num) => {
        return num * 2;
    })

    return doublesArr;
}

/////////////////////////////////////////////

function doubled(numArr) {


    let doublesArr = numArr.map( (num) => {return num * 2;} )

    return doublesArr;
}

// console.log(doubled(nums2)); // [10, 12, 14, 16, 18]


//****************************************************** */

/* 
<array>.filter()

Returns a new array of elements that return true when passed 
to the anonmyous callback function

*/

let nums3 = [21, 2, -3, 45, 500];

function onlyEvens(arr) {
    let evensArr = arr.filter( (num) => {
        return num % 2 === 0;
    } );

    return evensArr;
}

// console.log(onlyEvens(nums3)); // [2, 500]

let letters = ['a', 'b', 'c', 'd', 'e']

function noVowels(arr) {

    let consonants = arr.filter( (char) => {
        return "aeiou".indexOf(char) === -1;
    } )

    return consonants;
}

// console.log(noVowels(letters)); // ['b', 'c', 'd']


//****************************************************** */

/* 
<array>.every()

Returns true if all elements in the array return true when passed
to the anonymous callback function

Returns false if even 1 element in the array returns false when passed
to the anonymous callback function

*/


let nums4 = [52, 6, 7, 8, 92];
let nums5 = [52, -6, 7, 8, 92];

function allPositive(arr) {

    let result = arr.every( (ele) => {
        return ele > 0;
    });

    return result;
}

// console.log(allPositive(nums4)); // true
// console.log(allPositive(nums5)); // false

//****************************************************** */

/* 
<array>.some()

Returns true as long as just 1 element in the array return true when passed
to the anonymous callback function

Returns false if all elements in the array return false when passed
to the anonymous callback function

*/


let nums6 = [52, 6, 7, 8, 92];
let nums7 = [52, -6, 7, 8, 92];

function someNegative(arr) {

    let result = arr.some( (ele) => {
        return ele < 0;
    });

    return result;
}

// console.log(someNegative(nums6)); // false
// console.log(someNegative(nums7)); // true