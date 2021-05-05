// console.log(str1[str1.length - 1]);
let str1 = "abcdef"; 

// String is a primitive Data type
//  Primitive data types are immutable/unchangeable


// ARRAYS : complex-data type
// An array is a list-like object that is mutable/changeable
// An array is made up of elements
// Element can be anything from primitive data type to complex data type 


let arr = [45, 23, 13, 'hello', [1, 2, 3], true];
// index    0   1   2     3         4        5
// length   1   2   3     4         5        6

// console.log(arr[3]);
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// str1[0] = "b";
// console.log(str1) // ? 

// arr[0] = "bena";
// console.log(arr) // ["bena", 23, 13, 'hello', [1, 2, 3], true] 

// arr[arr.length - 1] = false;
// console.log(arr);

// arr = [3, 4, 5];
// console.log(arr);

// METHODS:

// console.log(arr.indexOf(23));
// console.log(arr.length);

// console.log(arr.slice())


// .push(<element>)
// adds new element to end of the array
// wordsArr.push("pizza");
// console.log(wordsArr);

// .pop()
// removes and returns last element of the array
// let removed = wordsArr.pop();
// console.log(wordsArr.pop());
// console.log(removed);
// console.log(wordsArr);

// .unshift(<element>) 
// adds new element to front of the array

// wordsArr.unshift("waterbottle");
// console.log(wordsArr);

// .shift() 
// removes and returns first element of the array
// wordsArr.shift();
// console.log(wordsArr);


// let wordsArr = ["word", "hello", "goodbye", "hamburger"];

// .splice(<indexPosition>, <numberOfElements>);
//  removes elements from a index position and returns an array of removed elements

// console.log(wordsArr.splice(1, 2)) // => ["hello", "goodbye"]
// console.log(wordsArr);

// .concat(<array>)
// merges/joins two or more arrays together and returns joined array
// doesnt change the original array

// let numsArr = [2, 3, 4, 5, 6];

// let combinedArr = wordsArr.concat(numsArr);
// console.log(combinedArr);
// console.log(wordsArr);


// Looping Thru an Array

let wordsArr = ["word", "hello", "goodbye", "hamburger"];

// for (let i = 0; i < wordsArr.length; i++) {
//     let word = wordsArr[i];
//     console.log(word);
// }

// let i = 0;
// while (i < wordsArr.length) {
//     let word = wordsArr[i];
//     console.log(word);
//     i++;
// }


// TYPE CONVERSION

// .split(<string>) String => Array
// splits string into an array on the given input

// let greeting = "Hello Bena, We are talking about arrays."
// let splitGreet = greeting.split(" ");
// console.log(splitGreet);

// // .join(<string>)  Array => String
// // joins array into a string on the given input

// let underScored = splitGreet.join("123");
// console.log(underScored);


// Given an array of lowercase words, return a new array uppercase words

function allCaps(wordsArr) {
    let caps = [];

    for (let i = 0; i < wordsArr.length; i++) { // i is each index place of the wordsArr
        let word = wordsArr[i]; // we grab each individual element
        let capWord = word.toUpperCase();
        caps.push(capWord);
    }

    return caps;
}

// console.log(allCaps(["hello", "goodbye", "see you"])) // ["HELLO, "GOODBYE", 'SEE YOU"]
// console.log(allCaps(["spaghetti", "meatball"])) // ["SPAGHETTI", "MEATBALL"];

// let str2 = "Loop over me!"

// let arr2 = ["hello", "goodbye", "see you"]
// let num = str2.length;

// for (let i = 0; i < arr2.length; i++) {
//     let ele = arr2[i];
//     console.log(ele)
// }



// Larger than 10

// Given an Array of Numbers, return a new Array of all numbers greater than 10

function greaterThanTen(array) {
    let arr = [];

    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        if (ele > 10) {
            arr.push(ele);
        }
    }

    return arr;
}

// console.log(greaterThanTen([1, 2, 4, 10, 23, 45, 5, 18])) // => [23, 45, 18]

// console.log(greaterThanTen([100, 18, 5, 6, 10])) // => [100, 18]

function removeVowels(word) {
    let vowels = "aeiou";
    let str = "";

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (vowels.indexOf(char) === -1) {
            str += char;
        }
    }

    return str;
}

// console.log(removeVowels("apple")) // => ppl

// console.log(removeVowels("bootcamp")) // => btcmp

[1, 2, 4, 10, 23, 45, 5, 18]