// logEach
// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//

/* 
receive an array of elements
loop over the array and grab each ele
print each element with its corresponding index (console.log)
*/

function logEach(array) {

    for (let i = 0; i < array.length; i++) {
        let ele = array[i];

        console.log(i + ": " + ele);
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
receive 2 numbers (start, end)

init a new array
loop from start to end
and push each value of i into an array

return array of numbers
*/

function range(start, end) {
    let rangeArr = []; // [1, 2, 3, 4]

    for (let i = start; i <= end; i++) {
        rangeArr.push(i); 
    }

    return rangeArr;
}

// Examples:
//
// console.log(range(1,4)) // => [1,2,3,4]
// console.log(range(4,2)) // => []

///////////////////////////////////

// sumArray
// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//

/* 
receive array of nums
init sum var

loop over the nums array
grab each number
add number to sum var (increment)

return a singular sum
*/


function sumArray(array) {
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
receive array of words

init a new arr
loop over given array of words
grab each indiv word => capitilize word
push capped word into new arr

return a new array of cap words
*/

function capWords(words) {
    let capArr = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let capWord = word.toUpperCase();

        capArr.push(capWord);
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
receive a string (sentence)

create a var => split sentence => words arr
create a new arr to collect our modified words
loop over our wordsArr to grab each word and add a period at the end
push the modified word to the new arr

return new sent => joining the new arr on a space
*/

function wordPeriods(sentence) {
    let wordsArr = sentence.split(" "); // ['hello', 'world']
    let periodsArr = [];

    for (let i = 0; i < wordsArr.length; i++) {
        let word = wordsArr[i];
        let newWord = word + ".";

        periodsArr.push(newWord);
    }

    return periodsArr.join(" "); // ['hello.', 'world.'] => 'hello. world.'
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
receive array of numbers
init a var => track max val => set it init to null

loop over array
grab each num
compare to max val
if greater than max val => reassign maxval to be current num

return max val
*/

function maxValue(array) {

    if (array.length < 1) { //invalid array
        return null;
    }

    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        let num = array[i];

        if (max < num) {
            max = num;
        }
    }

    return max;
}

// Examples:
//
// console.log(maxValue([12, 6, 43])); // => 43
// console.log(maxValue([])); // => null
// console.log(maxValue([-4, -10, 0.43])); // => 0.43

function isFactorOf(number, factor) {
    return number % factor === 0;
}

// console.log(isFactorOf(6, 2));
// console.log(isFactorOf(5, 0));

////////////////////////////////////////////

// myIndexOf
// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
//
// CONSTRAINT: Do not use the indexOf method.
//

/* 
receive array and target

loop over the array
grab each ele and compare with target
if its a match return the current index

return an index number or -1
*/

function myIndexOf(array, target) {

    for (let i = 0; i < array.length; i++) {
        let ele = array[i];

        if (ele === target) {
            return i;
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
receive array of nums and number
init new arr

loop over numsArr and grab each num
ccheck if number leaves no remainder when modulod to the larger number
push to new arr if valid factor

return new array of valid factors
*/

function factorArray(array, number) {
    let factors = [];

    let i = 0;
    while (i < array.length) {
        let factor = array[i];

        if (number % factor === 0) {
            factors.push(factor);
        }

        i++;
    }

    return factors;
}

// Examples:
// //
console.log(factorArray([2,3,4,5,6],20)) // => [2,4,5]      20 = 2 * 10, 20 = 4 * 5
console.log(factorArray([2,3,4,5,6],35)) // => [5]
console.log(factorArray([10,15,20,25],5)) // => []

// 20 => 1, 2, 4, 5, 10, 20