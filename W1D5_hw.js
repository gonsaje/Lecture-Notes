// isInside
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf

function isInside(array, ele)  {
   
}
//
// console.log(isInside(['chase', 'phi', 'eliot'], 'eliot')); // => true
// console.log(isInside(['chase', 'phi', 'eliot'], 'fred')); // => false


// reverseStr
// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//

function reverseStr(str) {

}

// Examples:
// //
// console.log(reverseStr('bootcamp')); //=> 'pmactoob'
// console.log(reverseStr('App Academy')); //=> 'ymedacA ppA'

// luckySevens
// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
function luckySevens(max) {

}
// Examples:
//
// console.log(luckySevens(25)); // => [ 7, 14, 21 ]
// console.log(luckySevens(42)); // => [ 7, 14, 21, 28, 35, 42 ]

// copyMachine
// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//

function copyMachine(element, num) {

}
// Examples:
//
// console.log(copyMachine('candy', 0)); // => []
// console.log(copyMachine('candy', 2)); // => [ 'candy', 'candy' ]
// console.log(copyMachine('bread', 4)); // => [ 'bread', 'bread', 'bread', 'bread' ]
// console.log(copyMachine(11, 6)); // => [ 11, 11, 11, 11, 11, 11 ]

// everyOtherWord
// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//

function everyOtherWord(sentence) {
    
}
// Examples:
//
// console.log(everyOtherWord('hello how are you doing on this lovely day?')); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// console.log(everyOtherWord('the weather is wonderful')); // => [ 'the', 'is' ]

// wordYeller
// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
function wordYeller(sentence) { // "Stop it now! Please, wont you stop?"
    
}
// Example 1
var sent = "Stop it now! Please, wont you stop?";
var yelledWords = wordYeller(sent);
// console.log(yelledWords);
// console.log(yelledWords === "Stop! it! now! Please, wont! you! stop?"); // => true
// //
// // Example 2
// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// console.log(wordYeller(words))
// console.log(wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"); // => true

// arraySubstring
// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//

function arraySubstring(words, str) {
  
}
// Examples:
//
// console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel"))
// // => [true, false, true, true]
// console.log(arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre"))
// => [true, false, false, true]

// evenCaps
// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//

function evenCaps(sentence) {
 
}

// Examples:
//
// console.log(evenCaps("Tom got a small piece of pie"))
// // => "ToM GoT A SmAlL PiEcE Of pIe"
// console.log(evenCaps("the book is in front of the table"))
// // => "ThE BoOk iS In fRoNt oF ThE TaBlE"