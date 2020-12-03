// logEach
// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//

function logEach(array) {
    for (var i = 0; i < array.length; i++) {
        var ele = array[i];
        console.log(i + ": " + ele);
    }
}

// Example:
//
// logEach(["Anthony", "John", "Carson", "Huey"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

///////////////////////////////////////
// range
// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//

function range(start, end) {
    var result = [];

    for (var i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
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

function sumArray(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        var num = array[i];
        sum += num;
    }

    return sum;
}

// Examples:
//
// console.log(sumArray([5, 6, 4])); // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30

/////////////////////////////////////

// capWords
// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//

function capWords(words) {
   var capArr = [];

   for (var i = 0; i < words.length; i++) {
       var word = words[i];
       var capWord = word.toUpperCase();
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

function wordPeriods(sentence) {
    var words = sentence.split(" "); // ["hello", "world"]
    var newArr = [];

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var newWord = word + ".";
        newArr.push(newWord);
    }
       
    return newArr.join(" ");
}

// Examples:
//
// console.log(wordPeriods('hello world')); // => 'hello. world.'
// console.log(wordPeriods('what is the weather today')); // => 'what. is. the. weather. today.'

///////////////////////////////////////

// maxValue
// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//

function maxValue(array) {
    // if (array.length === 0) {
    //     return null;
    // }

    // var max = array[0]; //12
    var max = null;

    for (var i = 0; i < array.length; i++) { //i = 2
        var num = array[i]; // 43
        if (num > max || max === null) { //43 > 12
            max = num; // max = 43
        }
    }
    
    return max;
}

// Examples:
//
// console.log(maxValue([12, 6, 43])); // => 43
// console.log(maxValue([])); // => null
// console.log(maxValue([-4, -10, 0.43])); // => 0.43

////////////////////////////////////////////

// myIndexOf
// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
//
// CONSTRAINT: Do not use the indexOf method.
//

function myIndexOf(array, target) {
    for (var i = 0; i < array.length; i++) {
        var ele = array[i];

        if (ele === target) {
            return i;
        }
    }

    return -1;
}

// Examples:
//
// console.log(myIndexOf([1,2,3,4],4)) //=> 3
// console.log(myIndexOf([5,6,7,8],2)) //=> -1 

//////////////////////////////////

// factorArray
// Write a function `factorArray(array, number)` that takes in an array of
// numbers and a number and returns an array of all the factors.
//

function factorArray(array, number) {
    var factors = [];

    for (var i = 0; i < array.length; i++) {
        var factor = array[i];
        if (number % factor === 0) {
            factors.push(factor);
        }
    }
    
    return factors;
}

// Examples:
//
// console.log(factorArray([2,3,4,5,6],20)) // => [2,4,5]
// console.log(factorArray([2,3,4,5,6],35)) // => [5]
// console.log(factorArray([10,15,20,25],5)) // => []