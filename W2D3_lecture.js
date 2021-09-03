// NESTED LOOPS

// Loop

// iterate over a data type
// to repeatedly execute some set of code

// Nested Loops

// for (let i = 0; i < 3; i++) {
//     console.log("outer loop " + i);

//     for (let j = 0; j < 5; j++) {
//         console.log("                   inner loop " + j);
//     }
// }

// Find pairs/ Multiple Pointers

let students = [ "Visshal", "Christian", "Ras", "Mark"];
//                  i
//                               j

// Non Unique Pairs
for (let i = 0; i < students.length; i++) {
    let student1 = students[i];

    for (let j = 0; j < students.length; j++) {
        let student2 = students[j];

        // console.log( [student1, student2] );
    }
}

// Unique Pairs
for (let i = 0; i < students.length; i++) {
    let student1 = students[i];

    for (let j = i + 1; j < students.length; j++) {
        let student2 = students[j];

        // console.log( [student1, student2] );
    }
}

// Notes:
// Keep an eye out for when you need unique pairs and when you need non-unique
// Keep a tab on the inner incrementation
/////////////////////////////////
// find all unique pairs of nums in the array that add up to the target num
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let ele2 = arr[j];
            let sum = ele + ele2;

            if (sum === target) {
                console.log( [ele, ele2] );
            }
        }
    }
}

// twoSum([-1,0,1,2,3,4,5,6], 5) // => [1, 4], [2, 3]

// Iterate over multiple levels of complex datatypes (matrix = 2-dimensional array)

let matrix = [[1,2,3], [4,5,6], [7,8,9]];
//     i:        0        1         2
//     j:   |  0 1 2  | 0 1 2  | 0 1 2 |
for (let i = 0; i < matrix.length; i++) {
    let sub = matrix[i];

    for (let j = 0; j < sub.length; j++) {
        let ele = sub[j]; // matrix[i][j]

        // console.log(ele);
    }
}

// Sub Arrays can be different lengths

let matrix3 = [[1,2,3], [4,5], [7]];
//      i:        0       1     2
//      j:   |  0 1 2  | 0 1  | 0 |
for (let i = 0; i < matrix.length; i++) {
    let sub = matrix[i];

    for (let j = 0; j < sub.length; j++) {
        let ele = sub[j]; // matrix[i][j]

        // console.log(ele);
    }
}


let matrix2 = [
    [1,2,3], // [0, 0], [0, 1], [0 , 2]
    [4,5,6], // [1, 0], [1, 1], [1, 2]
    [7,8,9]  // [2, 0], [2, 1] ,[2, 2]
];

// console.log( matrix[2][1] )

let obj = {
    key1: [1,2,3,4],
    str2: ["HELLO", "BYE"],
    property3: [true, false, true]
}

for (let key in obj) {
    let valueArr = obj[key];

    for (let i = 0; i < valueArr.length; i++) {
        let ele = valueArr[i];

        // console.log(ele);
    }
}

/////////////////////////////////////////////

function getHighestCoordinateOnAPlane(plane) {
    // code here;
}
  
var geography = [
    [0, 2, 3, 0],
    [1, 4, 3, 1],
    [1, 5, 6, 4],
    [0, 4, 3, 2],
];
console.log(getHighestCoordinateOnAPlane(geography));// => [2, 2]

var geography1 = [
    [-10, -2, -3, -10],
    [-1, -4, -3, -10],
    [-10, -5, -6, -4],
    [-10, -4, -3, -2],
];

 console.log(getHighestCoordinateOnAPlane(geography1)); // => [1, 0]

/////////////////////// 

function schoolPrez(votes) {
 
}



let schoolVotes = [ { Henry: 6, Janice: 8}, { Adam: 10, Jenny: 3}, { Tyson: 16, Lisa: 18}];
console.log(schoolPrez(schoolVotes)) // => Lisa