// Basketball Points
// You are counting points for a basketball game, 
// given the amount of 2-pointers scored and 3-pointers scored, 
// find the final points for the team and return that value.


// function points(twoPoints, threePoints) {
//     let twoTotal = twoPoints * 2;
//     let threeTotal = threePoints * 3;
//     return (twoPoints * 2) + (threePoints * 3);
// }

// // Examples
// console.log(points(1, 1)) //➞ 5
// console.log(points(7, 5)) //➞ 29
// console.log(points(38, 8)) //➞ 100











// Reverse Psychology
// For this challenge, you will be given a string. 
// Your task is to add "Do not" before the given string. 
 


// function reversePsychology(str) {
//     return "Do not " + str + ".";
// }

// Examples
// console.log(reversePsychology("wash the dishes")) //➞ "Do not wash the dishes."
// console.log(reversePsychology("eat your lunch")) //➞ "Do not eat your lunch."
// console.log(reversePsychology("go to school")) //➞ "Do not go to school."




// Is it my chore?
// For this challenge, you will be given a string. 
// If the task given tells you not to do something it is not your chore.
// Otherwise it is your chore 


// Falsey Values: 0, NaN, '', false, Null, Undefined 
// function isMyChore(str) {
//     if (str.indexOf("Do not")) { // 0
//         return false;
//     } else {
//         return true;
//     }
// }

// // Examples
// console.log(isMyChore("Do not wash the dishes")) //➞ false
// console.log(isMyChore("Clean the dishes")) //➞ true
// console.log(isMyChore("Do not walk the dog")) //➞ false

function isGoodTip(mealCost, amountTipped) {


    if (mealCost * .15 <= amountTipped) { // if the amountTipped is greater or equal to 15% of mealCost
        return true;
    } else {
        return false
    }
}

// console.log(isGoodTip(100, 20)) // true
// console.log(isGoodTip(100, 15)) // true
// console.log(isGoodTip(100, 14)) // false 


// Will you make it?
// Example:
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is 
// running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. 
// There are 2 gallons left. 

//Task
// Considering these factors, write a function that accepts two numbers for pump distance and remaining fuel respectively
// and tells you if it is possible to get to the pump or not. 
// Function should return true if it is possible and false  if not. The input values are always positive.


// function willYouMakeIt(dist, fuel) {
//     let maxDist = fuel * 25;

//     if (maxDist >= dist) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(willYouMakeIt(50, 2)) // true;
// console.log(willYouMakeIt(122, 4)) // false;
// console.log(willYouMakeIt(10, 3)) // true;

// Convert Age to Days
// Create a function that takes the age in years and returns the age in days.

function calcAge(years) {
    return years * 365;
}

// Examples
console.log(calcAge(65)) //➞ 23725

console.log(calcAge(0)) //➞ 0

console.log(calcAge(20)) //➞ 7300
