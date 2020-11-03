// isInside
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//

// function isInside(array, ele) {
//     if (array.indexOf(ele) > -1) {
//         return true;
//     }

//     return false;
// }

function isInside(array, ele) {
    return "hello".includes("hel");
}


// HINT: use indexOf
//
// console.log(isInside(['chase', 'phi', 'eliot'], 'eliot')); // => true
// console.log(isInside(['chase', 'phi', 'eliot'], 'fred')); // => false



// reverseStr
// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//

// function reverseStr(str) {
//     var reversed = "";

//     for (var i = str.length - 1; i >= 0; i--) {
//         var char = str[i];
//         reversed += char;
//     }

//     return reversed;
// }
function reverseStr(str) {
    var reversed = [];

    for (var i = str.length - 1; i >= 0; i--) {
        var char = str[i];
        reversed.push(char);
    }

    return reversed.join("");
}

// Examples:
//
// console.log(reverseStr('bootcamp')); //=> 'pmactoob'
// console.log(reverseStr('App Academy')); //=> 'ymedacA ppA'



// luckySevens
// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//

function luckySevens(max) {
    var arr = [];

    for (var i = 1; i <= max; i += 1) {
        if (i % 7 === 0) {
            arr.push(i);
        }
    }

    return arr;
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
    var arr = [];
    var i = 0;
    while (i < num) {
        arr.push(element);
        i++;
    }


    return arr;
}

// Examples:

// console.log(copyMachine('candy', 0)); // => []
// console.log(copyMachine('candy', 2)); // => [ 'candy', 'candy' ]
// console.log(copyMachine('bread', 4)); // => [ 'bread', 'bread', 'bread', 'bread' ]
// console.log(copyMachine(11, 6)); // => [ 11, 11, 11, 11, 11, 11 ]

// everyOtherWord
// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//

function everyOtherWord(sentence) {
    var result = [];
    var words = sentence.split(" ");

    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        if (i % 2 === 0) {
            result.push(word);
        }
    }

    return result;
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

function wordYeller(sentence) {
    var result = [];
    var words = sentence.split(" "); // ["St,p", "i!", "now"...]
    var puncs = ". , ! ? ; :";

    for (var i = 0; i < words.length; i++) {
        var word = words[i]; //"Stop"

        if (puncs.indexOf(word[word.length - 1]) > -1) {
            result.push(word);
        } else {
            result.push(word + "!");
        }
    }

    return result.join(" ");
}

// Example 1
var sent = "Stop it now! Please, wont you stop?";
var yelledWords = wordYeller(sent);
// console.log(yelledWords); // => true
//
// Example 2
var words = "Go to the store and grab the following: milk, bread, run, and cake";
// console.log(wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"); // => true

// arraySubstring
// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//

function arraySubstring(words, str) {
    var arr = [];

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.indexOf(str) > -1) {
            arr.push(true);
        } else {
            arr.push(false);
        }
    }

    return arr;
}

// Examples:
//
// console.log(arraySubstring(["helto", "history", "helix", "hellos"],"helt"))
// => [true, false, true, true]
// console.log(arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre"))
// => [true, false, false, true]

// evenCaps
// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//

function evenCaps (sentence) {
    var loweredStr = sentence.toLowerCase()
    var result = [];

    for (var i = 0; i < sentence.length; i++) {
        var char = sentence[i];

        if (i % 2 === 0) {
            result.push(char.toUpperCase());
        } else {
            result.push(char);
        }
    }

    return result.join("");
}

// Examples:
//
console.log(evenCaps("Tom got a small piece of pie"))
// => "ToM GoT A SmAlL PiEcE Of pIe"
console.log(evenCaps("the book is in front of the table"))
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"