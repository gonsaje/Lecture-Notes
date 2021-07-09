// Data Modeling
// Array vs. Objects

// Objects are better with complex data, and also are very quick to grab info
// Not very good with iterating and sorting (there is no order, and sequence is not guaranteed)

// Arrays are great for sorting
//  Require us to iterate over the entire arr (potentially expensive)

let arr = [1,2,3,4,5];
let obj = {k1: 1, k2: 2, k3: 3, k4: 4, k5: 5};

// Ford, Mustang
// Honda, Civic
// Mazda, 626
// Chevy, Tahoe
// Dodge, Charger
// Kia, Rio

let car = {
    company: 'Ford',
    model: 'Mustang',
    year: 1991,
    color: "red",
    previousOwners: [{name: "ulises", yearsOwned: 10}]
};

// car.company;

let vehicle = [["year", 1984], ["color", "blue"], ["company", "Honda"], ["model", "Civic"]];

for (let i = 0; i < vehicle.length; i++) {
    let pair = vehicle[i];
    // console.log(pair);
    if (pair[0] === "company") {
        console.log(pair[1]);
    }
}

// vehicle.forEach((pair) => {
//     console.log(pair);
// })

// console.log(vehicle);

let user1 = {
    name: "Ulises",
    status: "is learning JS",
    age: 34,
    photos: {},
    friends: [{name: "Kevin"}, {name: 'Jae'}],
    favNum: 12,
    posts: 9000
}

let user2 = {
    name: "Brooke",
    location: "Texas",
    favFoods:["Apples", "Oranges", "Blueberries"],
    favNum: 13,
    posts: 365
};
let user3 = {
    name: "Ry",
    location: "Texas",
    favFoods:["Apples", "Oranges", "Blueberries"],
    favNum: 42,
    posts: 52
};

let user4 = {
    name: "Frankelin",
    location: "Texas",
    favFoods:["Apples", "Oranges", "Blueberries"],
    favNum: 99,
    posts: 3000
};

let nycUsers = [user1, user2, user3, user4];

// console.log(nycUsers);

for (let i = 0; i < nycUsers.length; i++) {
    let pointer1 = nycUsers[i];

    for (let j = i + 1; j < nycUsers.length; j++) {
        let pointer2 = nycUsers[j];

        if (pointer1.posts < pointer2.posts) {
            [nycUsers[i], nycUsers[j]] = [nycUsers[j], nycUsers[i]];
        }
    }
}

// console.log("               ");

// console.log(nycUsers);