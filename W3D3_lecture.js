var nums = [1, 2, 3, 9, 10];
// console.log(Math.max(...nums));

// splat operator ... allows for multiple arguments
var num2 = [4,7,8,...nums]
// console.log(Math.min(...num2))

// Math object functions:
 //rounds down to nearest whole number

// console.log(Math.floor(4.1)); 
// console.log(Math.ceil(4.1));
// console.log(Math.round(4.1)); //conventional rounding
// console.log(Math.round(4.5));

// console.log(Math.sqrt(9));
// console.log(Math.sqrt(10)); // square root
// console.log(Math.pow(2, 5)) // raised to a power

// console.log(Math.abs(-5)) // absolute value. returns distance from 0
var num1 = 5;
var num2 = 3;

// console.log(Math.abs(num2 - num1) === 2)

// console.log(Math.random())

//randomly roll a dice

var idx = Math.floor((nums.length * Math.random()));
// console.log(nums[idx]); 

// console.log(Math.PI)
// console.log(Math.sign(0)) // if the number is neg: -1, pos: +1, or 0



// functions can be passed around 
// pieces of JS that are transportable
// objects that can be invoked

//Higher Order Functions:
// a function that receives another function as an argument

// function higherOrd(cb) { // callback function is a func that has been passed to higher order func and can be called later
//     console.log("before");
//     cb();
//     console.log("after");
//     cb();
// }

// function sayHi() {
//     console.log("hi");
// }


// higherOrd('sayHi');

// function f1(cb, str) { // respond, 'Crocodile'
//     var result = cb(str); // sayGoodbye("Alligator") => 'See ya later, Alligator'
//     console.log('result of callback: ' + result); // 'result of callback: See ya later, Alligator'
//   }

//   function sayGoodbye(name) { // "Alligator"
//     return 'See ya later, ' + name; //'See ya later, Alligator'
//   }

//   function respond(name) {
//     return 'After a while, ' + name;
//   }

//   f1(sayGoodbye, 'Alligator'); // 
//   f1(respond, 'Crocodile');    // 


function addAndCall(num1, num2, cb) {
    var sum = num1 + num2;
    return cb(sum);
}

function yellAnswer(answer) {
    console.log(answer + ' IS THE ANSWER!');
}

function double(num) {
    return num * 2;
}

// addAndCall(40, 2, yellAnswer);  // 42 IS THE ANSWER
// addAndCall(1, 1, console.log);  // 2
// console.log(addAndCall(10, 2, double));      // 24
// console.log(addAndCall(7, 2, Math.sqrt));    // 3

// callback methods
// built in higher order functions

// .indexOf()
// for() {}

var arr = ['a', 'b', 'c', 'd'];
arr.forEach( //takes every element, extracts each element and passes it on to the cb
     (ball, paper, scissor) => { // takes in the element
        // console.log(paper)
        // console.log(scissor)
})

//can take up to 3 args:
// ele
// idx
// entire arr itself
//  => fat arrow function

function getTotalSum(arr) {
    var sum = 0;
    var returnVal = arr.forEach((num) => { 
        sum += num;
        return "hello";
    })
    console.log(returnVal)
    return sum;

}

var arr = [3, 6, 5, 7, 3]; //
// console.log(getTotalSum(arr)); // 24

//.map()
// iterates over an array and passes over each ele to the callback
// returns new array, where each new element is the return val from the callback

var result = arr.map((num, i) => { // 6, 1
    return num * i; // => 6
})

// console.log(result);

// .filter() => only returns values from original arr if cb returns true

var result2 = arr.filter((num) => {
    return num % 2 === 0;
})

console.log(result2);

