// Data Modeling

// Array vs. Objects

// Arrays
// They are ordered/sequenced
// Iteration & Sorting

let nums = [0, 2, 3, 4, 1]

console.log(nums.sort((a,b) => a-b ));

let obj = {
    sauce: 'ketchup'
}

// Objects are better for complex data

let user1 = ["bAlsi123", 'password123', 'san francisco'];

let user2 = {
    username: "bAlsi123",
    password: 'password',
    friends: [{username: "richardPancakes", location:"NY"}, ]
}

// Ford, Mustang
// Honda, Civic
// Mazda, 626
// Chevy, Tahoe
// Dodge, Charger
// Kia, Rio

let racecar = {
    company: 'Ford',
    model: 'Mustang',
    year: 1990
}



function maxValue(numbers) { // [1,2,3]
    var largest = null; // 1
  
    for (var i = 0; i < numbers.length; i += 1) {
      var num = numbers[i]; // 1
  
      if (largest === null || num > largest) {
        largest = num;
      }
    }
  
    return largest; // 3
}

console.log(maxValue([1,2,3]))
let i = 0;
while (true) {
    console.log(i)
    // break;
}