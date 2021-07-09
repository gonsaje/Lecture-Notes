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

*/

function range(start, end) {

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
receive an array of nums (array)
create var (total)

loop over nums array
    - add each number to a var (total)


return total sum of all num (number)
*/


function sumArray(array) { // [5, 6, 4]
    let total = 0; // 15 

    //    [5, 6, 4]
    // l:  1  2  3
    // i:  0  1  2  3

    for (let i = 0; i < array.length; i++) { // i = 3 < 3
        let num = array[i]; // undefined
        total += num;
    }

    return total;
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

*/

function capWords(words) {

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
receive sentence
give each word in the sentence an index => .split() at space " " => an array of words | 'hello world' => ['hello", "world']
create a new var (empty array) => to collect the period-ified words 

loop over array of words
    - with each word => add a period to each word => push the new word into empty arr


join new arr of words on a space | ['hello.', 'world.'] => 'hello. world.'
return a sentence (string) (add a period to end of each word)
*/

function wordPeriods(sentence) {
    let words = sentence.split(" "); // ['hello", "world']
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i]; // "hello"
        let newSent = word + "."; // "hello."

        newWords.push(newSent);
    }

    return newWords.join(" ");
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
receive array of nums
create a var to track the largest value in the arr

loop over the array
    - compare current number with max var value
        - if current num is greater => reassign the max to be the current num

return the largest element/value
*/

function maxValue(array) {
    let container = null; // the absence of a max
    
    for (let i = 0; i < array.length; i++) {
        let num = array[i];

        if (num > container || container === null) {
            container = num;
        } 
    }

    return container;
}

// Examples:
//
// console.log(maxValue([12, 6, 43])); // => 43
// console.log(maxValue([])); // => null
// console.log(maxValue([-4, -10, 0.43])); // => 0.43
// console.log(maxValue([-4, -10, -43])); // => -4
/* 


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
receive array of nums and a number
create new arr

loop thru array of nums
    check if current num is a factor of the target number => if true push to new arr

return array of factors of the target num
*/

function factorArray(array, number) { // [2,3,4,5,6]
    let factorsArr = [];

    for (let i = 0; i < array.length; i++) {
        let num = array[i];

        if (number % num === 0) {
            factorsArr.push(num);
        }
    }

    return factorsArr;
}

// Examples:
// //
// console.log(factorArray([2,3,4,5,6],20)) // => [2,4,5]    
// console.log(factorArray([2,3,4,5,6],35)) // => [5]
// console.log(factorArray([10,15,20,25],5)) // => []

// 20 => 1, 2, 4, 5, 10, 20