// logEach
// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//

/* 
receive array of names

run a for loop on the array to get each ele
=> for each ele => console.log

*/

function logEach(array) {
    for (let i = 0; i < array.length; i++) {
        let name = array[i];
        console.log(i + ": " + name);
    }
   
}

// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

///////////////////////////////////////
// range
// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//

/* 
receive 2 nums
init an empty array (collect nums here)
loop from start to end by increments of 1
add each num to new array
return array
*/

function range(start, end) {
    let array = [];

    for (let i = start; i <= end; i++) {
        array.push(i);
    }

    return array;
}

// Examples:
// //
// console.log(range(1,4)) // => [1,2,3,4]
// console.log(range(4,2)) // => []

///////////////////////////////////

// sumArray
// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//

/* 
receive arr

init sum var
loop over arr
    -> for each num add to sum var

return sum

*/


function sumArray(array) { // [5, 6, 4]
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let num = array[i];

        sum += num;
    }

    return sum;
}

// Examples:

// console.log(sumArray([5, 6, 4])); // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30

/////////////////////////////////////

// capWords
// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//

/* 
receive arr of words
init a new arr (hold new capped words)

loop over array of words
-> for each ele => uppercase and put into new arr

return new arr
*/

function capWords(words) { // ['hello', 'boOtCaMp', 'PREP!']
    let yellWords = []; // ["HELLO"]

    for (let i = 0; i < words.length; i++) { // i = 0
        let word = words[i]; // 'hello'
        let wordCapped = word.toUpperCase(); // this is the original word set to uppercase // "HELLO"

        yellWords.push(wordCapped);
    }

    return yellWords;
}

// Example:
//
// console.log(capWords(['hello', 'boOtCaMp', 'PREP!'])); // => ['HELLO', 'BOOTCAMP', 'PREP!']

/////////////////////////////////////

// wordPeriods
// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//

/* 
receive string

init var that holds split up string

loop over arr of words
=> inputs a period in between every word

join arr of words back together (.join)


*/

function wordPeriods(sentence) {
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word + ".";

    }

    let newSent = words.join(" ");
    return newSent;
}


// Examples:

// console.log(wordPeriods('hello world')); // => 'hello. world.'
// console.log(wordPeriods('what is the weather today')); // => 'what. is. the. weather. today.'

///////////////////////////////////////

// maxValue
// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//

/* 
receive arr
start with index 0

loop over the array
and check each num with the current value

return maxVal (num)
*/

function maxValue(array) {
    let max = null;

    for (let i = 0; i < array.length; i++) {
        if (max === null || max < array[i]) { // if there is no max OR if the current max is less than current item
            max = array[i];
        } 
    }

    return max;
}

// Examples:
//
// console.log(maxValue([12, 6, 43])); // => 43
// console.log(maxValue([])); // => null
// console.log(maxValue([-4, -10, 0.43])); // => 0.43
// console.log(maxValue([-4, -10, -43])); // => -4


/* 
receive a number and a possible factor

see if the factor divides evenly into the number (% with remainder of 0)

return boolean (true | false)

*/

function isFactorOf(number, factor) {
    return number % factor === 0;
}

// console.log(isFactorOf(6, 2)); // true
// console.log(isFactorOf(5, 2)); // false

////////////////////////////////////////////

// myIndexOf
// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
//
// CONSTRAINT: Do not use the indexOf method.
//

/* 

*/

function myIndexOf(array, target) {

}

// Examples:
//
// console.log(myIndexOf([1,2,3,4, 4, 4, 4],4)) //=> 3
// console.log(myIndexOf([5,6,7,8],2)) //=> -1 

//////////////////////////////////

// factorArray
// Write a function `factorArray(array, number)` that takes in an array of
// numbers and a number and returns an array of all the factors.
//

/* 
receive an array of potential factors and a number

init a new arr (collect factors)

loop over the array of numbers
=> each factor => check if number % factor leaves no remainder

return array of only valid factors
*/

function factorArray(array, number) { // [2,3,4,5,6], 20
    let factors = []; // [2]

    for (let i = 0; i < array.length; i++) {
        let factor = array[i]; // 2

        if (number % factor === 0) { // 20 % 2 === 0
            factors.push(factor);
        }
    }

    return factors;
}

// Examples:
// //
// console.log(factorArray([2,3,4,5,6],20)) // => [2,4,5]    
// console.log(factorArray([2,3,4,5,6],35)) // => [5]
// console.log(factorArray([10,15,20,25],5)) // => []

// 20 => 1, 2, 4, 5, 10, 20