// Strings vs. Arrays

// Strings are primitive data type
// Strings are not mutable

let str = "";
str += "a";
// console.log(str); // a

let str2 = "hello";
str2[0] = 'x';
// console.log(str2);

// Arrays are complex data types and are mutable
// Arrays can be mutated in place

let arr = [ 'h', 'e', 'l', 'l', 'o'];
arr[0] = 'x';
// console.log(arr);

function xVowels(str) {
    let vowels = "aeiou";
    let arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        let char = arr[i];

        if (vowels.indexOf(char) > -1) {
            arr[i] = 'x';
        }
    }

    return arr.join("");
}

// console.log(xVowels("banana")) // => "bxnxnx"

/* 
convert number to a string
split up the number to get each indiv digit place
add 1 to each
then join back up
*/

console.log("2" + 1);
console.log(25);

function addOneToEach(num) {
    let numString = String(num); 
    let numArr = numString.split(""); // ["2", "5"]

    for (let i = 0; i < numArr.length; i++) {
        let numChar = numArr[i];
        let num = Number(numChar);
        let newNum = num + 1;

        numArr[i] = newNum;
    }

    return Number(numArr.join(""));
}

// console.log(addOneToEach(25)); // => 36
// console.log(addOneToEach(183)); // => 294
// console.log(addOneToEach(5248)); // => 6359

// Bad style:
// function skip5(){
//     for (var i = 1; i < 10;i += 1){
//     if (i === 5) {
//       continue;}
//     console.log(i);
//     }}
// // Good style:

// function skip5() {

//     for ( var i = 1; i < 10; i += 1 ) {

//         if (i === 5) {
//             i === 4;
//             continue;

//         }

//         // if (i === 6) return "x";
//         // else if (i === 4) return 'y';
//         // else return 'z';
//         console.log(i);
//     }

//     for (let key in obj) {
//         if ("x") {

//         } else if ('y') {

//         } else {

//         }
//     }

//     return;
// }

//  // Bad style:
//  var num1=3;
//  var num2 =5;
//  if (num1+num2=== 8) {
//    console.log("the sum is 8");
//  }

//  // Good style:
//  var num1 = 3;
//  var num2 = 5;
//  if (num1 + num2 === 8) {
//    console.log("the sum is 8");
//  }

//  myNum++;
//  myNum += 1;

// Debugging

// Types of Erros:

// Syntax Error => Incorrect use of predefined syntax
    //  Missing bracket, parenthesis, etc.

// function hello() {
//     for (let i = 0; i < 5; i++) {

//     }
// }


// Reference Error => represents an error when an operation cant be performed

// console.log(dog);
// hello();

// Type Error  => truy to use something in a way that it's not supposed to be

// var arr5 = [1, 2, 3, 4, 5];
// arr5();

function findNumber(array, target) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return true;
      }
    }
    return false;
  }

// console.log(findNumber([1, 2, 3, 4, 5], 4));




function func1(num) {
    return num + 50;
}

function func2(num) {
    return num + " bottles of beer on the wall";
}

function func3(num) { // 5
    var x = func1(num); //  x = 5 + 50; 55
    return func2(x); // 55 + " bottles of beer on the wall"
}

  var result = func3(5);

  console.log(result); // What does this print out?