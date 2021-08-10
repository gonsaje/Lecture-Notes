// NESTED LOOPS

// Loop

// iterate over a data type
// to repeatedly execute some set of code

// let arr = [1,2,3];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let i = 2; i <= 5; i++) {
//     console.log("hello");
// }

// Nested Loops

// Find Pairs / Mult Pointers

for (let i = 0; i < 3; i++) {
    // console.log("outer loop  " +  i)
    for (let j = 0; j < 5; j++) {
        // console.log("                           inner loop " + j)
    }
}

let classArr = ["Tashi", "Zach", "Anna", "Katie", "Marco"];
//                                                   i       
//                                                          j

for (let i = 0; i < classArr.length; i++) {
    let classmate1 = classArr[i];

    for (let j = i + 1; j < classArr.length; j++) {
        let classmate2 = classArr[j];

        // console.log([classmate1,classmate2]);
    }

}



function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];

            for (let y = j + 1; y < arr.length; y++) {
                let num3 = arr[y]

                if (num1 + num2 + num3 === target) {
                    console.log( [num1, num2, num3] );
                }
            }
        }
    }
}

// twoSum([1,2,3,4,5,6], 8) // => [1, 4], [2, 3]



// Traverse over multiple dimensions of nested arrays (matrix)

let matrix = [ [1,2,3], [4,5,6], [7,8,9] ]
//      i:   |    0    |   1    |   2    |
//      j:   |  0,1,2  | 0,1,2  | 0,1,2  |

for (let i = 0; i < matrix.length; i++) {
    let subArr = matrix[i];

    for (let j = 0; j < subArr.length; j++) {
        let num = subArr[j];

        // console.log(num);
    }

}

let matrix1 = [ [ [1,2,3], [4,5,6] ]]
//      i:   |    0    |   1    |   2    |
//      j:   |  0,1,2  | 0,1,2  | 0,1,2  |

for (let i = 0; i < matrix1.length; i++) {
    let subArr = matrix1[i];

    for (let j = 0; j < subArr.length; j++) {
        let subSub = subArr[j];

        for (let y = 0; y < subSub.length; y++) {
            let num = subSub[y];
    
            
            // console.log(num);
        }
    

    }

}


let obj = {
    key1: [1,2,3,4],
    str2: ["HELLO", "BYE"],
    property3: [true, false, true]
}

for (let key in obj) { // str2
    let all = obj[key]; // ["HELLO", "BYE"]

    for (let i = 0; i < all.length; i++) {
        let ele = all[i];

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