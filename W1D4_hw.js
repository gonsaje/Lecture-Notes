// logEach
// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//

/* 

*/

function logEach(array) {

 
   
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
receive start end
init countDown var => array
loop from start to end
push each num to arr

return the new arr
*/

function range(start, end) {
    let countDown = [];

    for(let i = start; i <= end; i++) {
        countDown.push(i);
    }

    return countDown;
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
init sum set to zero
loop over array 
add each ele to sum
return sum

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
receive array of words (point A)

init a new arr 
loop over given words arr
grab each indiv word (ele)
set each word to uppercase and push uppercased word to new arr

return a new array of original to all caps (point B)
*/

function capWords(words) {
    let capArr = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toUpperCase();
        // let capWord = word.toUpperCase()

        capArr.push(word);
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
receive a str 

init a new arr
split up sent into words on a space
loop over words
add period to each indiv word and push to arr
join arr to form new str

return a new str with periods at the end of each word
*/

function wordPeriods(sentence) {
    let newArr = [];
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = word + ".";

        newArr.push(newWord);
    }

    return newArr.join(" ");
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
receive array of num

init a new var to track value => set default to null;
loop over array of nums
compare each indiv num to max 
    - if maxValue is null => set current value to be new max
    - otherwise if current value is greater than max Value => set current value to be new max

return the max value in the array
*/

function maxValue(array) {
    let max = null;

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];

        if (max === null || currentNum > max) {
            max = currentNum;
        }
    }

    return max;
}

// Examples:
//
// console.log(maxValue([12, 6, 43])); // => 43
// console.log(maxValue([])); // => null
// console.log(maxValue([-4, -10, 0.43])); // => 0.43

/* 
receive num and factor
check if factor is factor of num
return true if true


*/

function isFactorOf(number, factor) {

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
receive array and number

init new var factors (arr)

loop over given array
look at each num
check if each ele is a factor of given number 
if true => push to factors arr

return array of factors of given number
*/

function factorArray(array, number) { // [2,3,4,5,6]
    let factors = [];

    for (let i = 0; i < array.length; i++) { // i = 0
        let ele = array[i]; // 2

        if (number % ele === 0) {
            factors.push(ele);
        }
    }

    return factors;
}

// Examples:
// //
console.log(factorArray([2,3,4,5,6],20)) // => [2,4,5]    
console.log(factorArray([2,3,4,5,6],35)) // => [5]
console.log(factorArray([10,15,20,25],5)) // => []

// 20 => 1, 2, 4, 5, 10, 20