// Nested Loops

// Loops
// let arr = [1,2,3];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Find Pairs

// for (let i = 0; i < 3; i++) {

//     console.log("outer loop: " + i);
//     for (let j = 0; j < 5; j++) {

//         console.log("                       inner loop: " + j);
//     }
// }

// Multiple Pointers

let students = ["Josh", "Helen", "Matteo", "Michael", "Alex", "Yefeng", "Janelia", "Amory"];
// pointer i:                                  i
// pointer j:                                             j

// for (let i = 0; i < students.length; i++) { // outer most loop
//     let student1 = students[i];

//     for (let j = i + 1; j < students.length; j++) { // mid loop
//         let student2 = students[j];

        
//         for (let l = j + 1; l < students.length; l++) { // inner loop
//             let student3 = students[l];
            
//             console.log([student1, student2, student3]);
//         }
//     }
// }


/* 

Print all pairs of numbers that sum up to the target number
twoSum([1,2,3,4,5,6,7], 5) => [1, 4], [2, 3], 
*/
let numbers = [1, 2, 3, 4, 5, 6, 7];
//                i
//                               j

function twoSum(arr, target) { // [1,2,3,4,5,6,7]
    for (let i = 0; i < arr.length; i++) { // 1
        let num1 = arr[i]; // 2

        for (let j = i + 1; j < arr.length; j++) { // 2
            let num2 = arr[j] //  3
            let sum = num1 + num2; // 5

            if (sum === target) {
                console.log([arr[i], arr[j]]);
            }
        }
    }
}

// twoSum(numbers, 8);


// Traverse thru multiple layers

let matrix = [
    [1,2,3],
    [4,5,6, 45],
    [7,8,9, 10, 23]
];

// console.log(matrix[0][0]);


for (let i = 0; i < matrix.length; i++) {
    let sub = matrix[i]; // [1,2,3]

    for (let j = 0; j < sub.length; j++) {
        let ele = sub[j];

        // console.log(ele);
    }
}

// matrix=[["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]]
// i      |       0        |       1       |        2       |
// j         0    1    2      0    1    2      0     1    2


let matrix1 = [
    ['a','b','c'], 
    ['d'], 
    ['g','h']
];


function printReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let arr1 = arr[i];

        for (let j = arr1.length - 1; j >= 0; j--) {
            let charEle = arr1[j];

            console.log(charEle);
        }
    }
}

printReverse(matrix1)// => h, g, d....


/* 

Given a 2D array of altitudes return the coordinates of the highest point in the
geography grid.

ex.
getHighestCoordinateOnAPlane(geography) => [2,2]
because at the location of geography[2][2] => 6
*/

function getHighestCoordinateOnAPlane(plane) {
    // code here;
}
  
  var geography = [
    [0, 2, 3, 0],
    [1, 4, 3, 1],
    [1, 5, 6, 4],
    [0, 4, 3, 2],
  ]
  
console.log(getHighestCoordinateOnAPlane(geography)); 
  // => [2, 2] => 6

  var geography1 = [
    [-10, -2, -3, -10],
    [-1, -4, -3, -12],
    [-1, -5, -6, -4],
    [-6, -4, -3, -2],
  ]

console.log(getHighestCoordinateOnAPlane(geography1)); 


function schoolPrez(votes) {
    let prez = null; // [Adam]
    let maxVotes = 0; // 10

    for (let i = 0; i < votes.length; i++) {
        let classObj = votes[i]; // { Adam: 10, Jenny: 3}
        
        for (let name in classObj) { // Adam
            let pollCount = classObj[name]; // 10

            if (pollCount >= maxVotes) {
                prez = name;
                maxVotes = pollCount;
            }
        }

    }

    return prez;
}

// let schoolVotes = [{ Henry: 6, Janice: 8}, { Adam: 10, Jenny: 3}, { Tyson: 16, Lisa: 18}];
// console.log(schoolPrez(schoolVotes)) // => Lisa


