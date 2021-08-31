// logEach
// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//

/* 
receive arr of strings

loop over array (over length of array)
print index and each string

*/

function logEach(array) {

    for (let i = 0; i < array.length; i++) {
        console.log(i + ": " + array[i]);
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
receive 2 num

init a new arr

loop from start to end


return arr

*/

function range(start, end) {
    let arr = [];

    for (let i = start; i <= end; i++) { // 
        arr.push(i);
    }

    return arr;
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
create sum var (init at 0)

loop over given array

add each number to the sum

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
receive array of words (string)

init a new arr

loop over given arr
take each string and push capped version to new arr

return array of capped strings
*/

function capWords(words) { // ['hello', 'boOtCaMp', 'PREP!']
    let capArr = [];

    for (let i = 0; i <= words.length - 1; i++) {
        let word = words[i];

        capArr.push(word.toUpperCase());
    }

    return capArr;
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
receive a string

split up the sent into words

init a new arr => collect modified words

loop over the array of split up words
for each word=> add a period
collect modified word into new arr

arr => str (join arr on space)
return a modified string
*/

function wordPeriods(sentence) { // 'hello world'
    let wordsArr = sentence.split(" "); // each word seperated ["hello", "world"]
    let periodsArr = [];

    for (let i = 0; i < wordsArr.length; i++) {
        let newWord = wordsArr[i] + "."; // "hello"
        periodsArr.push(newWord);
    }

    return periodsArr.join(" ");
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
receive an array of numbers

init a var to track maxValue (init to null)

loop over the given
=> compare each number to the current max
    => if current is greater than max => max is replaced

return a singular max number
*/

function maxValue(array) { // []
    let max = null; // there is no max
    // let max = array[0]; // undefined
    for (let i = 0; i < array.length; i++) { // i = 0
        let num = array[i]; // 12

        if (max === null || num > max) { // if there is no current max val, or the curr num is greater than max
            max = num;
        }
    }

    return max;
}

// Examples:

// console.log(maxValue([12, 6, 43])); // => 43
// console.log(maxValue([])); // => null
// console.log(maxValue([-4, -10, 0.43])); // => 0.43
// console.log(maxValue([-4, -10, -43])); // => -4


/* 
receive num and potential factor

see if there is no remainder when dividing nu by pot factor

return a boolean
*/

function isFactorOf(number, factor) {
    // return number % factor === 0;

    if (number % factor === 0 ) {
        return true;
    }

    return false;
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

receive array of elements

loop over array
for each ele => compare with target
=> if target is amatch return index place

if not found give back -1

return an index place or -1
*/

function myIndexOf(array, target) {

    for (let i = 0; i < array.length; i++) {
        let ele = array[i];

        if (ele === target) {
            return i; // returns index and ends loop/func
        }
    }

    return -1;
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
receive array of numbers and number

init a new arr

loop over given arr of num
for each number=> check if factor of target num => push to new arr

return a factors arr

*/

function factorArray(array, number) { // [2,3,4,5,6], 20
    let factorsArr = [];

    for (let i = 0; i < array.length; i++) {
        let factor = array[i]; // 2

        if (number % factor === 0) { // 20 % 2 === 0
            factorsArr.push(factor);
        }
    }

    return factorsArr;
}

// Examples:
// //
console.log(factorArray([2,3,4,5,6],20)) // => [2,4,5]    
console.log(factorArray([2,3,4,5,6],35)) // => [5]
console.log(factorArray([10,15,20,25],5)) // => []

// 20 => 1, 2, 4, 5, 10, 20