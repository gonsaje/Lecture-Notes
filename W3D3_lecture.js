// MATH OBJECT

// console.log(Math.max(12, 4, 5, 6, 9));
// console.log(Math.min(12, 4, 5, 6, 9));

let numbersArr = [-3, 24, 3000, 0, 8];

// spread operator ... => tells JS thatthe input passed in should not be read as a singular input
// console.log(Math.min(...numbersArr));

// console.log(Math.floor(2.999999999999999)); // rounds down to the nearest integer
// console.log(Math.ceil(1.1)); // rounds up to the nearest integer
// console.log(Math.round(2.4));

// console.log(Math.sqrt(47));
// console.log(Math.pow(2, 2)); // first input is base, second input is the raised power 

// console.log(Math.abs(-9 - 6));

// console.log(Math.random() * 100); // returns random number between 0 and 1 .0000056

// console.log(Math.PI);

// console.log(Math.sign(0)); // tells us if the number inputted is pos (1), neg (-1), or zero (0)


// Higher Order Functions & Callbacks
// A higher order function is a function that receives another function as a parameter/argument
// A callback is a function that is passed in as an argument to a HOF

function example(name) {
    console.log("hello " + name);
}

// example("Josh");
function func1(cb) {
    console.log("before");

    cb();

    console.log("after");
}

function hello() {
    console.log("hello");
}

// func1(hello);


// console.log(" ")

// func1(function goodbye() {console.log("goodbye")});

// Callbacks vs. Helpers
// Callbacks are part of the HOF main functionality
// Helpers are functions that help simplify another functions logic


function f1(cb, str) { //  respond, "Crocodile"
	var result = cb(str); // respond("Crocodile")
	console.log('result of callback: ' + result);
}

function sayGoodbye(name) {
        return 'See ya later, ' + name;
}

function respond(name) {
        return 'After a while, ' + name;
}

// f1(sayGoodbye, 'Alligator'); // see ya later, alligator
// f1(respond, 'Crocodile');    // after a while, crocodile

// function newWords(sent) {
//     let words = sent.split(" ");
//     let removed = [];
//     let vowels = "aeiou"

//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         let newWord = removeVows(word)
        
//         for (let j = 0; j < word.length; j++) {
//             let char = word[j];

//             if (!vowels.includes(char)) {
//                 newWord += char;
//             }
//         }

//         removed.push(newWord);
//     }

//     return removed.join(" ");
// }
// // function removeVows(str)

// console.log(newWords("hello bootcamp"))

function addAndCall(num1, num2, cb) {
    var sum = num1 + num2; // 9
    return cb(sum); // Math.sqrt(9)
}

function yellAnswer(answer) {
    console.log(answer + ' IS THE ANSWER!');
}

  function double(num) {
    return num * 2; //24
}

// addAndCall(40, 2, yellAnswer);  // 42 IS THE ANSWER!
// addAndCall(1, 1, console.log);  // 2
// console.log(addAndCall(10, 2, double));      // 24
// console.log(addAndCall(7, 2, Math.sqrt));    // 3

// Callback Methods (Built-in Methods for the Array class/prototype)

/* 
<array>.forEach()
Another way to iterate over an array

******ORDER MATTERS*****
First parameter => is ALWAYS element
Second => ALWAYS index
Third => array

*/

// let nums = [1,2,3,4,5];
// let evens = []

// nums.forEach((ele) => {
//     console.log(ele);
//     if (ele % 2 === 0) {
//         evens.push(ele);
//     }

// })

// console.log(evens);


///////////////////////////////////////////////

/* 

<array>.map()

Returns a new array with each elemnt of the original array 
changed by the anonymous callback function
*/

// let numsArr = [21,2,-3,45,500];

function doubled(nums) {
    let doubleArr = nums.map((num) => {
        if (num > 0) {
            return num * 2;
        } else {
            return num;
        }
    })

    return doubleArr;
}

// console.log(doubled(numsArr)); // [42, 4, -6, 90, 1000];

///////////////////////////////////////////////

/* 

<array>.filter()

Returns a new array of only elements that return true when passed to anon cb function
*/

// let numsArr = [21,2,-3,45,500];

function onlyEvens(arr) {
    let evensArr = arr.filter((num) => {
        return num % 2 === 0;
    })

    return evensArr;
}

// console.log(onlyEvens(numsArr));

function noVowels(arr) {
    let consonantsArr = arr.filter((char) => {
        return !"aeiou".includes(char);
    })

    return consonantsArr;
}


// console.log(noVowels(["a", "b", "c", "d", "e"]))

///////////////////////////////////////////////

//<array>.every() returns true if every element in the function returns true when passed to anon cb

// let numsArr = [21,2,-4,44,500];

// let result = numsArr.every((num) => {
//     return num % 2 === 0;
// })
// console.log(result);

///////////////////////////////////////////////

//<array>.some() returns true if even one element in the function returns true when passed to anon cb


let numsArr = [21,21,-41,441,5001];

let result = numsArr.some((num) => {
    return num % 2 === 0;
})
console.log(result);