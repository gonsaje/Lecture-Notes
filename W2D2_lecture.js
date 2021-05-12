// Objects -> complex data type

// Object Syntax

let arr = ['abc', 'bgh', 'c', 'd']; // ordered/sequenced list-like objects

// Objects: sequence is not guaranteed
// Key - Value Pairs
// Keys: Strings
// Values: Any data type in JS

let car = {
    // 0: "Toyota",
    key: "value",
    "model": "Camry",
    "year": 2017,
    "issues": ["oil change", "bad brakes", "no windshield fluid", "inspection due"],
    "stolen": true,
    color: "blue",
    previousOwners: {name: "Kevin", age: 21, loc: 'NY', favFoods: [{name: "emapanada", ingredients: [""]}]},
    dealership: "NYC TOYOTA"
};

// console.log(car);

// let key = "issues"
// console.log(car[key]);
// console.log(car.years);

// Getting data from an object
// Bracket Notation
// <object>[<keyStr>] // both are specific keyName but bracket notation needs a string

// Dot Notation => Must know specific key name
// <object>.<keyName>


let key = "gearbox";
car[key] = "automatic" // car["gearbox"]
car["rust"] = true;
car.gasTank = 60; 

car["gasTank"]
car.gasTank
// console.log(car["previousOwners"]["age"]);

let issuesArr = car.issues; // ["oil change", "bad brakes", "no windshield fluid", "inspection due"]
for (let i = 0; i < issuesArr.length; i++) {
    // console.log(issuesArr[i]);
}

let boat = {
    brand: "Sail",
    0: "Camry",
    "year": 2017,
    "issues": ["oil change", "bad brakes", "no windshield fluid", "inspection due"],
    "stolen": true,
    color: "blue",
    previousOwners: {name: "Kevin", age: 21, loc: 'NY'}
};

// Iterate over an Object

// for...in loop

// for (let property in car) {
//     let value = car[property];
//     console.log(property + " " + value);
// }

for (let key in car) {
    console.log(key)
    console.log(" ")
    let value = car[key]; // car["key"], car["model"], car["issues"]

    console.log(value);
    console.log("------------")
}



// Frequency Counters

let str = "hello world, I'm learning JavaScript.";

function countVowels(word) { // "hello everbody"
    let count = {}; // {e: 3, o: 2}
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < word.length; i++) {
        let char = word[i]; // e

        if (vowels.includes(char)) {
            
            if (count[char] === undefined) { // this key does not exist in the obj
                count[char] = 1; // setting a new k,v pair of the current vowel to 1
            } else {
                count[char] += 1;
            }

        }
    

    }

    return count; // {e: 3, o: 2}
}

// console.log(countVowels(str))

var user = {
    email : "name@mail.com",
    friends : ["Tad", "Mel", "Chris", "Kate"]
}

function printGreetingToFriends(user) {
    let friendsArr = user.friends;
    for (let i = 0; i < friendsArr.length; i++) {
        let name = friendsArr[i];
        console.log("hello, " + name);
    }
}

// printGreetingToFriends(user);
// "hello, Tad"
// "hello, Mel"
// "hello, Chris"
// "hello, Kate"

var allUsers = {
    user1 : {
      name: "Hayden",
      friends: ["Samantha", "Miles", "Jacob"],
    },
    user2 : {
      name: "Tad",
      friends: ["Shareen", "Anthony"],
    }
}
  
  
  
function printAllTheFriendNames(allUsers) {
    
    for (let key in allUsers) { //key = user2
        let user = allUsers[key]; // {name: 'Tad', friends: ["Shareen", "Anthony"]}
        let friendsList = user.friends; //  ["Shareen", "Anthony"]

        for (let i = 0; i < friendsList.length; i++) {
            let friend = friendsList[i];
            console.log(friend);
        }
    }
}

// printAllTheFriendNames(allUsers);
  // Samantha"
  // Miles"
  // Jacob"
  // Shareen"
  // Anthony"

  var votingResults = [
    "Janice",
    "Henry", 
    "Janice",
    "Henry",
    "Janice",
    "Janice",
    "Henry",
    "Janice",
    "Henry",
    "Janice",
    "Henry",
    "Janice",
    "Janice",
    "Henry",
  ];

function countVotes(results) {
    let tally = {};

    for (let i = 0; i < results.length; i++) {

        if (tally[results[i]] === undefined) {
            tally[results[i]] = 1;
        } else {
            tally[results[i]]++;
        }
    }

    return tally;
};

// console.log(countVotes(votingResults)); 
//   // => { Henry: 6, Janice: 8 }


  
// function schoolPrez(votes) {
      
// }

// let schoolVotes = [{ Henry: 6, Janice: 8}, { Adam: 10, Jenny: 3}, { Tyson: 16, Lisa: 18}];
// console.log(schoolPrez(schoolVotes)) // => Lisa

