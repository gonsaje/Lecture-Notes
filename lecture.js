// W2D2

// for (var i = 0; i < 3; i++) { //run once
//     console.log("i is " + i); //iterated thrice
//     for (var j = 0; j < 3; j++) { //run three
//         console.log("   j is" + j); //iterated nine times
//     }
// }

// var names = ['Eliot', 'Phil', 'Chase', 'Bree'];
// // [Eliot, Phil], [Eliot, Chase].
// for (var i = 0; i < names.length; i++) {
//     for (var j = i + 1; j < names.length; j++) {
//         var name1 = names[i];
//         var name2 = names[j];    
//         console.log([i,j],[name1, name2]);

//     }
// }

// function findSumIn(arr, target) { 
//     var indices = [];
//     for (var i = 0; i < arr.length - 1; i++) { //1
//         for (var j = i + 1; j < arr.length; j++) { //2 -> 5
//             if (arr[i] + arr[j] === target) {
//                 indices.push([i, j]);
//             }
//         }
//     }

//     return indices;
// }
// console.log(

//     findSumIn([4, 6, 1, 2, 5, 3], 7) // => [[1, 2], [3,4], [0,5]]
// )


// var arr = [
//     [1, 4, 3],
//     [8, 7, 5, 9],
//     [4, 3]
//   ];

//   // n x n matrix/multi-dimensional => length of outer array is same as sub-arrays
//   // n x m matrix => sub-arrays are not the same length as outer array

//   function printNums(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         // var sub = arr[i];
//         // console.log(arr[1][0]);
//         for (var j = 0; j < arr[i].length; j++) {
//             console.log(arr[i][j]);
//         }
//     }
//   }

//   console.log(
//       printNums(arr)
//   )


function getHighestCoordinateOnAPlane(plane) { // find the biggest number and return coords of that number is found
    var maxNum = null;
    var location = [];

    for (var i = 0; i < plane.length; i++) {
        var subArr = plane[i];

        for (var j = 0; j < subArr.length; j++) {
            var num = subArr[j];

            if (num > maxNum || maxNum === null) {
                maxNum = num;
                location = [i, j];
            }
        }
    }

    return location;
}
  
var geography = [ //keep track of maxNum and location
    [5, -2, -3, -9],
    [5, -4, -3, -1],
    [-2, 5, -6, -4],
    [-4, -4, -3, -2],
]

console.log(getHighestCoordinateOnAPlane(geography)); // => [1, 3]

//looking thru a matrix and finding highest number that we come across