// Data Modeling
// Arrays vs. Objects

// Objects are better with complex data, and also very quick to grab info
// Not very good with iterating and sorting (theres no order, and seq is not guaranteed)

let obj = {
    color: "red",
    name: 'apple',
    season: 'autumn'
};

// Arrays are great for sorting
// Require us to iterate over the entire arr (potentially expensive)

let arr = [1,2,3,4,5];




// Ford, Mustang
// Honda, Civic
// Mazda, 626
// Chevy, Tahoe
// Dodge, Charger
// Kia, Rio

// let car = {
//     make: "Ford",
//     model: "Mustang"
// }

// let car2 = [["make", "Ford"], ["model", "Mustang"]]

let user1 = {
    name: "Marco",
    location: 'NY',
    age: 66,
    favNum: 24,
    posts: 9000
}

let user2 = {
    name: 'Anna',
    location: 'NY',
    age: 67,
    favNum: 25,
    posts: 1000
}

let user3 = {
    name: 'Tashi',
    location: 'DE',
    age: 68,
    favNum: 26,
    posts: 19000
}

let twitterUsers = [user2, user1 , user3];

for (let i = 0; i < twitterUsers.length; i++) {
    let pointer1 = twitterUsers[i];

    for (let j = i + 1; j < twitterUsers.length; j++) {
        let pointer2 = twitterUsers[j];

        if (pointer1.favNum < pointer2.favNum) {
            [twitterUsers[i], twitterUsers[j]] = [twitterUsers[j], twitterUsers[i]]
        }
    }
}

console.log(twitterUsers);