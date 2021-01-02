// var str = 'hello';

// str = 'hi'; // variable reassignment

// var str = 'bye'; // variable redefinition


// LOOPS
// method for us to traverse through a indexed data type;
// iterator
// console.log(3)
// console.log(2)
// console.log(1)
// console.log('Happy New Years')


// FOR LOOPS

// for (<initialization>; <condition>; <incrementor>) {}
// initialization is going to be where our loop starts and how we're going to track it
// condition : the bounds of our loop
// incrementor/decrementor: helps us move through loop and reach out condition

// for (var i = 0; i <= 10; i++) { //11
//     console.log(i); //1
// }
// // console.log('done');


// for (var i = 10; i >= 1; i-- {
//     console.log(i);
// }
// console.log("happy new year!")



// console.log(str.length)

// intermediate variables
// print every character with an even index 

function printEvenIdx(str) {

    for (var i = 0; i <= str.length - 1; i += 1) {
        if (i % 2 === 0) {
            var char = str[i];
            console.log(char);
        }
    }
}

var firstName = "Kegan";
var car = "bmw";
var month = "december";

// printEvenIdx(month);


// WHILE LOOPS

// <initialization>
/*
while (<condition>) {
    logic..

    <incrementor/decrementor>
}
*/

// var i = 10;

// while (i >= 4) {
//     console.log(i);

//     i /= 2;
// }










// function printInclusiveRange(min, max) {
//     for (var i = min; i <= max; i += 1) {
//         console.log(i);
//     }
// }


// function printInclusiveRange(min, max) {
//     var i = min;
//     while (i <= max) {
//         console.log(i);
//         i++;
//     } 
// }






// printInclusiveRange(5, 10); // => 5, 6, 7, 8, 9, 10
// printInclusiveRange(7, 10); // => 7, 8, 9, 10


// function step2BackwardsInclusive(max, min) {
//     for (var i = max; i >= min; i -= 2) {
//         console.log(i);
//     }
// }

function step2BackwardsInclusive(max, min) {
    var i = max;
    while (i >= min) {
        console.log(i);
        i -= 2;
    }
}

// step2BackwardsInclusive(20, 4); // 20 18 ... 6 4


// every character that exists with an index that is divisble either 4 or 5;
// function reversePrintChars(str) {
//     for (var i = str.length - 1; i >= 0; i--) {
//         if (i % 4 === 0 || i % 5 === 0) {
//             var char = str[i];
//             console.log(char);

//         }
//     }
// }

// reversePrintChars('altoids are my favorite mints'); // 
// reversePrintChars('iphone is my current phone'); 

// var vowels = "aeiou";
// var str = 'dime';


// for (var i = 0; i < str.length; i++) {
//     var char = str[i];

//     if (vowels.indexOf(char) > -1) {
//         continue;
//     } else {
//         console.log(char);
//     }
// }
// console.log('outside')







// constraints: all input strings will be all lowercase;
// we want to return a new string with all vowels erased;
function removeVowels(str) {
    var vowels = 'aeiou';
    var result = '';

    for (var i = 0; i <= str.length - 1; i++) { // i += 1 => i = i + 1
        var char = str[i];

        if (vowels.indexOf(char) > -1) {
            continue;
        } else {
            result += char; // result = result + char
        }
        // console.log(result);
    }

    return result;
}

// print every character of a string excepts if the index is a multiple of 5;

function skipAllFives(str) {

    for (var i = 0; i <= str.length - 1; i++) { // i is tracking out index

        var char = str[i];

        if (i % 5 === 0) {

            continue;

        } else {

            console.log(char);

        }

    }

}

skipAllFives('goodbye') // => o o d b e // g y 

/*
Hints:
how can we check if a character is a vowel?

what would happen if i ran '' + 'b' => ?

*/

// console.log(removeVowels("towel")) // 'twl';
// console.log(removeVowels("ferrari")) // 'frrr';