// ARRAYS

// An array is a list-like object that is mutable;
// An array is made up of elements
    // Elements can be anything from a primitive data type to other complex data types
    // Elements are stored sequentially
        // They can be accessed via an index
        
        // console.log(arr[0])
        // console.log(arr[3])
        // console.log(arr[5])
        // console.log(arr[6])
        // console.log(arr[arr.length - 1])
        
        // str[0] = 'x';
        // console.log(str)
        
        // arr[0] = 'hello';
        
        // console.log(arr[0]);
        // console.log(arr);
        
        
        // METHODS:
        
        // console.log(arr.indexOf('hello'));
        
        // var str = 'hello';
        // console.log(str.length); // 5
        var ids = [1, 2, 'hello', 'howdy', 'hey']
        // console.log(ids.length); // 5
        // console.log(ids.indexOf('hello'));
        
        
        var arr = [10, 1, 2, 13, 4, 'string', ['a', 'b', 'c'], 5];
        //          0  1  2  3  4     5            6          7 
// console.log(arr.slice(1));
// slice returns a slice of the original data type from the first index inputted inclusively
// to second index inputted exclusively;
// to make a shallow copy of an array;



var copyArr = arr.slice(3); // [10, 1, 2, 13, 4, 'string', ['a', 'b', 'c'], 5];
// copyArr[0] = 'goodbye';
// copyArr[3] = 'altoids';

// console.log(arr);
// console.log(copyArr);

// .push() : adds a new element to the end of the array;
copyArr.push('Alfredo');
// console.log(copyArr);

var str1 = '';
str1 += 'x';
// console.log(str1) // 'x';

// .pop() : removes the last element from an array and returns it;
// console.log(" ");
var lastEle = copyArr.pop(); // 'Alfredo'
// console.log(" ");
// console.log(copyArr);

// .unshift() : adds a new element to the front of the array;

copyArr.unshift('Z');
// console.log(copyArr);

// .shift()

// console.log(copyArr.shift());
// console.log(copyArr);
// console.log(" ");

// .splice(<position>, <number of elements>) 
// removes elements from a index position and returns an array of removed elements
// console.log(copyArr.splice(copyArr.length - 1, 1));
// console.log(" ");
// console.log(copyArr)

// .concat() join or merge two or more arrays;

var secArr = ['Denny', 'Kegan'];
// copyArr.push(secArr);
var mergedArr = copyArr.concat(secArr);
// console.log(copyArr);
// console.log(mergedArr);


// Looping Thru an Array

// print every individual element;

var eleArr = [1, 2, 3]

//length => 3
// index 0...2

for (var i = 0; i < eleArr.length; i += 1) { // 0
    // console.log(eleArr[i]); // 1
}




var score1 = 10;
var score2 = 20;
var classScores = [1, 2, 23, 10, 15, 17]

// Type Conversion

// .split(); used on a String
// based on input, will divide string into an array of element

var str = 'welcome to bootcamp'
var wordsArr = str.split(" ");
// console.log(wordsArr);

// .join(); joins an array and its elements on whatever is inputted and returns a string
var joinedStr = wordsArr.join("_");
// console.log(joinedStr);

function replaceVowelsWithUnderscores(string) {
    var vowels = 'aeiou';
    var chars = string.split(""); // [ 'h','e','l',l','o', ",", " ", ...]
    var result = []; // ['h', '_'];

    for (var i = 0; i < chars.length; i++) { // 1
        var char = chars[i]; // 'e'

        if (vowels.includes(char)) {
            result.push("_");
        } else {
            result.push(char);
        }
    }
    var newStr = result.join("");
    return newStr;
}

var input = 'hello, i love coding';

console.log(replaceVowelsWithUnderscores(input))// 'h_ll_, _ l_v_...'



// the function removeVowels accepts a string and returns a new string with all vowels removed;

function removeVowels(string) {
    var vowels = 'aeiou'; // ['a,e,i,o,u]
    var newArr = [];

    for (var i = 0; i < string.length; i++) {
        if (!vowels.includes(string[i])) { //h
            newArr.push(string[i]);
        }
    }

    return newArr.join('');
}

// console.log(removeVowels("hello")); // "hll"
// console.log(removeVowels("welcome to bootcamp")); // "wlcm t btcmp";


function changeToEven(arr) {
    var newArr = [];
    
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        
        if (num % 2 === 0) {
            newArr.push('even');
        } else {
            newArr.push(num);
        }
    }

    return newArr;
}
var input1 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(changeToEven(input1)) //[1, "even", 3, "even", 5, "even", 7, "even"];



function largerThan10 (nums) {
    var arr = [];

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 10) {
            arr.push(nums[i]);
        }
    }

    return arr;
}

var numsArr = [25, 1, -4, 5, 10, 30] // 

// console.log(largerThan10(numsArr)) // [ 25, 30];


/*

Given the string we want to capitilize each word

Split the string into array of words
so that we can look at each individual word //.split(" ")

capitalize each word
cap the first letter and add the rest lowercase;

store the capWord into a new Array

join the array with capWords to return a newString


*/

function capitalizeEachWord(sentence) {
    var wordsArr = sentence.split(" "); // ['whenever', 'there', ...];
    var newSent = []; // ["Whenever", "There", "Are"...]

    for (var i = 0; i < wordsArr.length; i++) {
        var word = wordsArr[i]; // 'whenever'
        var firstLetter = word[0].toUpperCase(); // 'W'
        var tail = word.slice(1).toLowerCase(); // 'henever'
        var newWord = firstLetter + tail; // 'Whenever

        newSent.push(newWord);

        // newSent.push(wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1).toLowerCase());
    }

    return newSent.join(" ");
}

var str = 'whenever there are people we go';
// console.log(capitalizeEachWord(str));// => 'Whenever There Are People We Go';