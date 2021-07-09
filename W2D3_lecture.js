// NESTED LOOPS

// LOOP
// let arr = [1,2,3];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// Nested Loops

for (let i = 0; i < 3; i++) {
    // console.log("Outside " + i);

    for (let j = 0; j < 5; j++) {
        // console.log("                   middle Loop  " + j);        

        for (let x = 0; x < 7; x++) {
            // console.log("                                           inside " + x);        
        }
    }
}

// - Find Pairs / Multiple Pointers

let people = [ "Ulises", "Jae", "Kevin", "Cheesecake", "Pudding" ];
//                                i
//                                            j

for (let i = 0; i < people.length; i++) {
    let person1 = people[i];

    for (let j = i + 1; j < people.length; j++) {
        let person2 = people[j];

        for (let y = j + 1; y < people.length; y++) {
            let person3 = people[y];
            // console.log(person1, person2, person3);
        }
    }
}


// Print all pairs of numbers that sum up to the target value

function twoSum(arr, target) {
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];

            if (num1 + num2 === target) {
                console.log([num1, num2]);
            }
        }
    }
}

// twoSum([1,2,3,4,5,6], 5); // => [1,4], [2,3]

// - Traverse over a 2-dimensional array (matrix)

let matrix = [ [1,2,3], [4,5,6], [7,8,9] ];
//        i: |    0    |   1    |    2   |
//        j:   0  1  2   0 1 2    0 1 2

for (let i = 0; i < matrix.length; i++) {
    let sub = matrix[i]; // [1,2,3]

    for (let j = 0; j < sub.length; j++) {
        let ele = sub[j];
       
        // console.log(ele);
    }
}

let matrix2 = [
    [1,2,3],
    [4],
    [8,9]
];

for (let i = 0; i < matrix2.length; i++) {
    let sub = matrix2[i]; // [1,2,3]

    for (let j = 0; j < sub.length; j++) {
        let ele = sub[j];
       
        // console.log(ele);
    }
}

for (let i = matrix2.length - 1; i >= 0; i--) {
    let newSub = matrix2[i]; // [8,9]

    for (let j = newSub.length - 1; j >= 0; j--) {
        let ele = newSub[j];

        // console.log(ele);
    }
}

let cats = [
    {
        name: 'Cheesecake',
        toys: ['yarn', 'feather', 'doll']
    },
    {
        name: 'Pudding',
        toys: ['cat tower', 'scratch post', 'laser pointer']
    },
    {
        name: 'Alley Cat',
        toys: ['Fish Bones', 'Empty soda can']
    }
]

for (let i = 0; i < cats.length; i++) {
    let cat = cats[i]; // object
    let toys = cat.toys; // ['yarn', 'feather', 'doll'] // 

    for (let j = 0; j < toys.length; j++) {
        let toy = toys[j];
        console.log(cat.name +" plays with  "+ toy);
    }
}



// Cheesecake plays with yarn... Cheesecake plays with doll... Pudding plays with laser pointer


function getHighestCoordinateOnAPlane(plane) {
    // code here;
}
  
var geography = [
    [0, 2, 3, 0],
    [1, 4, 3, 1],
    [1, 5, 6, 4],
    [0, 4, 3, 2],
];

var geography1 = [
    [-10, -2, -3, -10],
    [-1, -4, -3, -10],
    [-10, -5, -6, -4],
    [-10, -4, -3, -2],
];
console.log(getHighestCoordinateOnAPlane(geography));
  // => [2, 2]

  console.log(getHighestCoordinateOnAPlane(geography1)); // => [1, 0]