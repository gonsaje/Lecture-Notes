// // Write a function mindPsAndQs(str) that accepts a string of uppercase
// // letters. The function should return the length of the longest consecutive
// // streak of the letters 'P' and 'Q'.
// // Hint: Use two variables. One to track the length of the current streak
// // and another to track the length of the longest streak so far. Think of
// // using a strategy similar to maxValue. This can also be solved using a
// // single loop!
// // Nested loops not needed!


// function mindPsAndQs(str) {
//     var max = 0;
//     var current = 0;

//     for (var i = 0; i < str.length; i++) {
//         var char = str[i];

//         if (char === "P" || char === "Q") {
//             current += 1;

//             if (current > max) {
//                 max = current;
//             }
//         } else {
//             current = 0;
//         }
//     }

//     return max;
// }

// // Examples:
// console.log(mindPsAndQs('BOOTCAMP')); // => 1
// console.log(mindPsAndQs('APCDQPCQP')); // => 2
// console.log(mindPsAndQs('PQPQ')); // => 4
// console.log(mindPsAndQs('PPPXQPPPQ')); // => 5

function allPositive(arr) {
    return arr.every((el) => {
        return el > 0;
    })
}

// console.log(allPositive([5, 4, 6, 7, 8])); // => true
// console.log(allPositive([5, 4, 6, 7, -8])); // => false

function upperCaseVowels(str) {
    var letters = str.split("");
    var newStr = letters.map((el) => {
        var vowels = "aeiou";

        if (vowels.includes(el)) {
            return el.toUpperCase();
        } else {
            return el;
        }
    })

    return newStr.join("");
}

// console.log(upperCaseVowels('icecream')); // => 'IcEcrEAm'
// console.log(upperCaseVowels('bootcamp prep')); // => 'bOOtcAmp prEp'

function removeVowelMethod(str) {
    var vowels = 'aeiouAEIOU';
    var chars = str.split("");
    return chars.map((el) => {
        if (!vowels.includes(el)) {
            return el;
        }
    }).join("");
}

// console.log(removeVowelMethod('Icecream')); // => 'ccrm'
// console.log(removeVowelMethod('Bootcamp prep')); // => 'Btcmp prp'

function allCharacters(str) {
    var letters = str.split("");
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    return letters.every((letter) => {
        return alphabet.indexOf(letter) > -1;
    });

}

// console.log(allCharacters('hello')); // => true
// console.log(allCharacters('hello!')); // => false
// console.log(allCharacters('he*5o')); // => false

// Data Modeling

// Arrays vs. Objects

// Array:
// They are sortable and iterable


// Objects:
// Complex Data


console.log(user.location)

Ford, Mustang
Honda, Civic
Mazda, 626
Chevy, Tahoe
Dodge, Charger
Kia, Rio


// [["username", "jacob_prall"]...];

// Facebook
    var user = {
        username: "jacob_prall",
        location: "CA",
        favoriteHobby: "SWE",
        age: 99,
        friends: [{friendStatus: true, timesInteracted: 10},{timesInteracted: 30}]
    }