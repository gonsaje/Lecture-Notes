// Callbacks / High Order Functions

// Array.forEach()

var arr1 = [1, 2, 3, 4];

var cb1 = function(num) {
    return num * 2;
}

// arr.forEach((ele, i) => {// (element, index, array)
//     console.log("element: "+ ele);
//     console.log("       index: " + i);
//     // console.log("               array: "+ scissor);
// });

// Higher Order Functions

// functions take in a function as an argument or return another function;

function eachOne (arr, cb) {
    arr.forEach((ele) => {
        console.log(cb(ele))
    });


}

// eachOne(arr1, cb1)

function anything(cb) {
    console.log("before");

    cb();

    console.log("after");
}

// anything(function() {console.log("during")});

function f1(cb, str) {
    var result = cb(str);
    console.log('result of callback: ' + result);
}

function sayGoodbye(name) {
    return 'See ya later, ' + name;
}

function respond(name) {
    return 'After a while, ' + name;
}

// f1(sayGoodbye, "Alligator") // "result of callback: See ya later, Alligator"
// f1(respond, "Crocodile") // "result of callback: After a while, Crocodile"

function addAndCall(num1, num2, cb) { // 10 2
    var sum = num1 + num2; // 12
    return cb(sum); // 24
}

function yellAnswer(answer) {
    console.log(answer + ' IS THE ANSWER!');
}

function double(num) {
    return num * 2;
}

// addAndCall(40, 2, yellAnswer);  // 42 IS THE ANSWER!
// addAndCall(1, 1, console.log);  // 2
// console.log(addAndCall(10, 2, double));      // 24
// console.log(addAndCall(7, 2, Math.sqrt));    // 3

function testForEach(array) {
    var result = [];

    array.forEach((ele) => { // does not return anything
                                    // calls a function on each element
        if (ele % 2 === 0) {
            result.push(ele);
        }
        // ele + 1; 
    })

    return result;
}

var arr2 = [1, 2, 3, 4]

// console.log(testForEach(arr2));

// .filter 
// returns a new arr

var result2 = arr2.filter((ele) => {
    // return isPrime(ele);
})


// .map returns a new arr

var result3 = arr2.map((ele, i) => {
    return ele * i;
})



// .every return boolean

// var result4 = arr2.every((ele) => {
//     return ele % 2 === 0;
// })

// .some return boolean

// var result4 = arr2.some((ele) => {
//     return ele % 2 === 0;
// })
// console.log(result4)

// Build out a manual .map function, without using .map

function myMap(cb, arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        var newNum = cb(num);
        result.push(newNum);
    }

    return result;
}

var arr = [3, 5, 4];

function doubler(n) {
    return n * 2;
}

console.log(myMap(doubler, arr)); // => [6, 10, 8]
