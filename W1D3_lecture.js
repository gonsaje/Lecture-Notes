// LOOPS

// console.log("Hello how are you doing?")
// console.log("Hello how are you doing?")
// console.log("Hello how are you doing?")
// console.log("Hello how are you doing?")
// console.log("Hello how are you doing?")

function printEachChar(str) {
    console.log(str[0]);
    console.log(str[1]);
    console.log(str[2]);
    console.log(str[3]);
    console.log(str[4]);
}

// printEachChar("sun")

function sayHello() {
    console.log("hello");
}

// sayHello();
// sayHello();
// sayHello();

// keep your code DRY => Don't Repeat Yourself

// For Loop
// for (<initialization> ; <conditional> ; <incrementor/decrementor> ) {
//      <code...>
// }

// i++ === i += 1
for (var i = 0; i < 5; i += 1) { // i = 5
    // console.log(i);

}

// console.log(i);

// The direction of your loop and also how you are advancing your loop

// for (var i = 5; i >= 0; i -= 1) {
//     console.log(i);
// }

// console.log(i);

// loop that will help us get the range from 2 (incl) to 25 (excl); 

// for (var i = 2; i < 25; i++) {
//     console.log(i);
// }

// starts from 100 and ends at 0 but only prints the multiples of 10

// for (var i = 100; i > 0; i--) {
//     if (i % 10 === 0) {
//         console.log(i);
//     }
// }


// Use cases for loops:
// execute a set of code x amount times
// traverse/iterate over a sequenced datatype (datatype with index places)

// for (var i = 0; i < str1.length; i += 5) { // 5
//     var char = str1[i]; // "e"
//     console.log(char);
// }

var str1 = "hello bootcamp prep";
// for (var i = str1.length - 1; i >= 0; i--) {
//         var char = str1[i];
//         console.log(char);
// }
    
// function printEvenChars(str) {
        
//     for (var i = 0; i < str.length; i += 1) { // 5
//         var char = str[i]; // "e"
//         // continue;
//         break;
//         if (i === 5) {
//             break;
//         } else if (i % 2 === 0) {
//             console.log(char);
//         }
//     }
//     console.log(i);
// }
    
var str2 = "I like chocolate"
var str3 = "mountain dew"

// printEvenChars(str1)
// printEvenChars(str2)
// printEvenChars(str3)

// Keywords
// break => breaks out of the loop the for loop
// continue => pushes you to the next iteration
// break, continue


// var str4 = "";

// for (var i = 0; i < 5; i++) {
//     console.log(str4);
//     str4 += "a";
// }

// console.log(str4);

// While Loop
// <init>
// while (<condition>) {
//      <code>
//      <increment/decrement>
// }

// var i = 5;// init

// while (i >= 0) { // condition
//     console.log(i);

//     i--; // increment/decrement
// }

// var exampleStr = "";

// while (exampleStr.length < 5) {
//     exampleStr += "a";
// }

// console.log(exampleStr);











// build out a function inclusiveRange(min, max) and prints every number in the range inclusive
// 

function inclusiveRange(min, max) {
    for (var i = min; i <= max; i++) {
        console.log(i);

        // if (i === 4) {
        //     return i;
        // }
    }
    console.log(i)
}

// inclusiveRange(1, 5);
// inclusiveRange(10, 25);
// print every number between max and min stepping by 2's
function step2backwardsEnclusive(min, max) {
    var i = max;// 6

    // while (i > min) {
    //     // if (i === max) {
    //     //     i -= 2;
    //     //     break;
    //     // }

    //     console.log(i);

    //     i -= 2;
    // }

    for (var i = max; i > min; i -= 2) {
        if (i === max) {
            continue;
        } else if (i === min) {
            break;
        }
        console.log(i);
    }
}

// step2backwardsEnclusive(0, 6) // 4, 2
// // step2backwardsInclusive(5, 10)


function printChars(str) {
    var i = 0;
    
    while (i < str.length) {
        var char = str[i];
        console.log(char);

        i++;
    }
}

printChars("hello") // => h, e, l, l, o