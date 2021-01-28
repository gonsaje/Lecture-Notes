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




// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

function numContent(num) {

}

console.log(numContent(5)) // => [0, 1, 2, 3, 4]
console.log(numContent(6)) // => [0, 1, 2, 3, 4, 5]
console.log(numContent(12)) // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(numContent(3)) // => [0, 1, 2]


/////////////////////////////////////////////////////////////////


// Will you make it?
// Example:
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is 
// running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. 
// There are 2 gallons left. 

//Task
// Considering these factors, write a function that accepts two numbers for pump distance and remaining fuel respectively
// and tells you if it is possible to get to the pump or not. 
// Function should return true if it is possible and false  if not. The input values are always positive.


function willYouMakeIt(dist, fuel) {
    var avgFuel = 25;

    if (fuel * avgFuel >= dist) {
        return true;
    } else {
        return false;
    }
}

console.log(willYouMakeIt(50, 2)) // true;
console.log(willYouMakeIt(122, 4)) // false;
console.log(willYouMakeIt(10, 3)) // true;
/////////////////////////////////////////////////////////////////

// Given a dictionary of items and their costs and an array specifying the items bought, calculate the total cost of the items plus a given tax.

// If item doesn't exist in the given cost values, the item is ignored.

// Output should be rounded to two decimal places.

// Python:

// costs = {'socks':5, 'shoes':60, 'sweater':30}
// get_total(costs, ['socks', 'shoes'], 0.09)
// #-> 5+60 = 65
// #-> 65 + 0.09 of 65 = 70.85


/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(nums) {
    var invertArr = [];

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        var inverted = num * -1;
        invertArr.push(inverted);

    }

    return invertArr;
}

console.log(invert([1,2,3,4,5]))  // == [-1,-2,-3,-4,-5]
console.log(invert([1,-2,3,-4,5])) // == [-1,2,-3,4,-5]
// invert([]) 


/////////////////////////////////////////////////////////////


// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)

function generateRange(min, max, step) {

}

//////////////////////////////////////////////////////




// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0

function fallingPetal(speed) {

}


/////////////////////////////////////////////////


// Speed is a crucial measure of success for any aspiring warrior, so let's write a function to calculate it.

// Average Speed is calculated by dividing distance by time. Given two strings as input the 
// first of which indicates a codewarrior's distance travelled (in metres or kilometres) 
// and the second indicating the time it takes them to travel (in seconds or minutes), 
// return a string indicating their speed in miles per hour rounded to the nearest integer.

// For the purposes of this kata one metre per second is defined as 2.23694 miles per hour.

// So for example given the input values of distance & time "3km" and "5min" we should return a speed value of "22mph".

function avgSpeed(dist, time) {

}

/////////////////////////////////////////////////

// Larger Product or Sum

// For this Kata you will be given an array of numbers and another number n. 
// You have to find the sum of the n largest numbers of the array 
// and the product of the n smallest numbers of the array, and compare the two.

// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"

// Note The array will never be empty and n will always be smaller than the length of the array.

// Example
//  sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) => "product"

// Explanation
// The sum of the 3 highest numbers is 41 + 36 + 20 = 97
// The product of the lowest 3 numbers is 8 x 9 x 10 = 720
// The product of the 3 lowest numbers is higher than the sum of the 3 highest numbers so the function returns "product"

function sumOrProduct(nums, x) {

}
//////////////////////////////////////////////////

// Life Path Number

// A person's Life Path Number is calculated by adding each individual number in that person's date of birth, 
// untill it is reduced to a single digit number.

// For example, Albert Einstein's birthday is March 14, 1879. The calculation of his Life Path Number would look like this:

// year: 1 + 8 + 7 + 9 = 25; 2 + 5 = 7
// month: 0 + 3 = 3
// day: 1 + 4 = 5
// final result: 7 + 3 + 5 = 15; 1 + 5 = 6
// Einstein's Life Path Number is therefore: 6

// Write the function lifePathNumber(dateOfBirth) that accepts a date of birth (as a string) on the 
// following format: "yyyy-mm-dd". Where "y" is year, "m" is month and "d" is day. 
// The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the given date of birth.

// You do not need to check that the input to the lifePathNumber()-function is correct format. 
// You can assume that the input to the function will always be a valid date (as a string) with the format: "yyyy-mm-dd".

// Note: If the month or day is a single digit number, then it shall be preceeded by a 0 (zero). 
// For example, in Einstein's case the month of March is 3; which is a single digit number. 
// The function shall in this case be called with the following parameter: lifePathNumber("1879-03-14").



//////////////////////////////////////////////////////////////

// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
// Explanation:
// Max product obtained from multiplying 5 * 10 = 50.

// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
// Explanation:
// The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.

function adjacentElementsProduct(nums) {

}

//////////////////////////////////////////////