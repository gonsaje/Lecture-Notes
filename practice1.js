/***********************************************************************
You have a walking robot. Given a string of compass directions (e.g., "nesw" or
"nnssen"), it will travel one mile in each of those directions. Write a function
to determine wether a set of directions will lead your robot to
its starting position
***********************************************************************/
// for loop to go over directions
// intermed for each direction
// if last location equals starting point (ex. [0,0]) return true
// else return false
function validWalk(directions) {
    let latitude = 0;
    let longitude = 0;


    for (let i = 0; i < directions.length; i++) {
        let direction = directions[i];

        if (direction === 'n') {
            latitude += 1;
        } else if (direction === 's') {
            latitude -= 1;
        } else if (direction === 'e') {
            longitude += 1;
        } else if (direction === 'w') {
            longitude -= 1;
        }
    }

    // if (latitude === 0 && longitude === 0 ) {
    //     return true;
    // }

    // return false;

    return latitude === 0 && longitude === 0;
}

// console.log(validWalk("nnnn"))//=> false
// console.log(validWalk("nenessww"))//=> true
// console.log(validWalk("nnnwww"))//=> false
// console.log(validWalk("nnesws"))// => true


/***********************************************************************
Write a function uniqueCharsInWords(sentence) that takes in a sentence and returns
true if every word contains only unique characters and returns false otherwise.
The same character can appear across differenet words, but within a single word
no character should appear more than once.
***********************************************************************/
// helper functions
/*

 */

/* 
receives a sent
break down sent into words
loop over each word
count each char of the word
returns boolean
*/
function uniqueCharsInWords(string) {
    let words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (!unique(word)) {
            return false;
        }
    }
    return true;
}

function unique(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (newStr.indexOf(char) > -1) {
            return false;
        } else {
            newStr += char;
        }
    }

    return true;
}

// how does a helper function work inside another function?


// console.log(uniqueCharsInWords('this has repeated chars'));//=> false
// console.log(uniqueCharsInWords('this has no duplicate chars'));//=>true
// console.log(uniqueCharsInWords('javascript is fun'));//=> false
// console.log(uniqueCharsInWords('coding is fun'));//=> true


/***********************************************************************
Write a function elementCount(array) that returns a object. Each key
corresponds to an element in the array and the value corresponds to how
many times that element appears in the array.
***********************************************************************/
/* 
receive array
create a counter obj
loop over the array
intermed var for each ele
check if ele is in counter obj
if not set a new k,v pair with ele pointing to 1
else if defined increment val by one
return counter obj
*/

function elementCount(array) {
    let counter = {};

    for (let i = 0; i < array.length; i++) {
        let ele = array[i];

        if (counter[ele] === undefined) {
            counter[ele] = 1;
        } else {
            counter[ele]++;
        }
    }

    return counter;
}

// console.log(elementCount(["a", "a", "b", "b"])); //=> { "a" : 2, "b" : 2 }
// console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }

// var object = {};

// object["word"] = "car";

// console.log(object["word"])


/***********************************************************************
Write a function printGreetingToFriends(user) that receives an user obj.
For each of the user's friends, print a greeting. If a user has no friends
print a string saying "<the user's name> has no friends!"

***********************************************************************/
/* 
receive an obj
var for user obj at the key of friends
loop over friends arr
print hello + friends[i]
*/


function printGreetingToFriends(user) {
    let friends = user.friends;
    
    if (friends === undefined || friends.length === 0) {
        console.log(user.name + " has no friends!");
        return;
        // return user.name + " has no friends!";
    }
    
    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        console.log("hello, " + friend);
    }
}

var user1 = {
    name: "Jack",
    email : "name@mail.com",
    friends : ["Tad", "Mel", "Chris", "Kate"]
}

var user2 = {
  name: "Jae",
  email : "name@mail.com",
  favoriteFoods : ["pizza", "burgers"],
}

var user3 = {
    name: "Jacob",
    email : "name@mail.com",
    friends : []
}
// console.log(printGreetingToFriends(user1));
//   // "hello, Tad"
//   // "hello, Mel"
//   // "hello, Chris"
//   // "hello, Kate"
// console.log(printGreetingToFriends(user2));
//     // "Jae has no friends"
// console.log(printGreetingToFriends(user3));
    // "Jacob has no friends"


// for in loop over the allUsers obj
// intermed var for individual user
// print user.friends

function printAllTheFriendNames(allUsers) {
    for (let key in allUsers) {
        let user = allUsers[key]; // allUsers1["user2"]
        let friends = user.friends; // array of friends
        for (var i = 0; i < friends.length; i++) {
            let friend = friends[i];

            console.log(friend);
        }

    }
}

var allUsers1 = {
        user1 : {
          name: "Hayden",
          friends: ["Samantha", "Miles", "Jacob"],
        },
        user2 : {
          name: "Tad",
          friends: ["Shareen", "Anthony"],
        },
}
      
printAllTheFriendNames(allUsers1);
    // Samantha"
    // Miles"
    // Jacob"
    // Shareen"
    // Anthony"