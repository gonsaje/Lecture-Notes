//Sam Merham// NESTED LOOPS
// muahahaha


// for (var i = 0; i < 3; i++) { // 3 times //Outer Loop
//     console.log(i);
//     for (var j = 0; j < 5; j++) { // inner Loop // 5 times
//         console.log("       " + j)
//     }
// }

var names = ["Eliot", "Phil", "Chase", "Bree"];

for (var i = 0; i < names.length - 1; i++) { // Eliot
    for (var j = i + 1; j < names.length; j++) {
        // console.log([names[i], names[j]]);
    }
}
[0,1,2,3] [0,1] [1,2]

// Edge Case

function findSumIn(array, target) {
    var result = [];

    for (var i = 0; i < array.length - 1; i++) {
        var firstNum = array[i];

        for (var j = i + 1; j < array.length; j++) {
            var secondNum = array[j];

            if (firstNum + secondNum === target) {
                result.push([i, j]);
            }
        }
    }

    return result;
}

// console.log(findSumIn([4,6,1,2,3], 7)) //=> [[0,4],[1,2]];

// Matrix => Two-Dimensional Array

var matrix1 = [
    [1,4,3],
    [8,7,5],
    [4,3,2]
]

function printAllNums(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        var sub = matrix[i];

        for (var j = 0; j < sub.length; j++) {
            var num = sub[j];
            // console.log(matrix[i][j]);
        }
    }
}

printAllNums(matrix1);

function getHighestCoordinateOnAPlane(plane) {
    var greatest = plane[0][0]; // 3
    var location = []; // [0, 2]

    for (var i = 0; i < plane.length; i++) { // i = 0
        var innerArr = plane[i]; // [0, 2, 3, 0]

        for (var j = 0; j < innerArr.length; j++) { // j = 2
            var num = innerArr[j]; // 3

            if (num > greatest) {
                greatest = num;
                location = [i, j]; // [0, 2]
            }
        }
    }

    return location;
}

var img = {color:{
    hue: 80,
    saturation: 50
}}

var color = img.color;

// console.log(color["hue"])
var geography = [
    [-5, -2, -3, -9],
    [-5, -4, -3, -1],
    [-2, -5, -6, -4],
    [-4, -4, -3, -2]
]
  
// console.log(getHighestCoordinateOnAPlane(geography));
  // => [1, 3]



// Sam's Question
function objectAdd (obj1,obj2){
    let resultObj = {};
    for (let key1 in obj1) {
        for(let key2 in obj2) {
            if(key1 === key2) {
              resultObj[key1] = obj1[key1] + obj2[key2];
            }
            if (resultObj[key1] ===undefined) {
              resultObj[key1]=obj1[key1];
            }
            if (resultObj[key2] ===undefined) {
              resultObj[key2]=obj2[key2];
            }
        }
    }
    return resultObj;
}

function objectAdd(obj1, obj2) {
    let resultObj = {};
    for (var key in obj1) {
        resultObj[key] = obj1[key]
    }
    for (var key2 in obj2) {
        if (resultObj[key2] !== undefined) {
            resultObj[key2] += obj2[key2]
        } else {
            resultObj[key2] = obj[key2]
        }
    }
    return resultObj;
}