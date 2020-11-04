// OBJECTS
var arr = [1, 2, 3, 4]
var firstEle = arr[0]
var person = {
    "name": "John", // key-value pair // keys must be strings
    age: 99,
    location: "San Antonio, Texas"
};

// Objects do not store data sequentially

// dot-notation & bracket-notation
// Object.<propertyName>
// console.log(person.name);
// console.log(person["age"]);

// var key = "location";
// console.log(person[key]);

person.favoriteFoods = ["pizza", "sushi", "halal"];
person["favoriteColor"] = "Green"
var gender = "gender";
person[gender] = "M"

// console.log(Object.keys(person)); // returns array of all object's keys

// console.log(Object.values(person)); // return array of all object's values


function getValue(obj, key) {
    return obj[key];
}

var user1 = {
  email : "user@gmail.com",
  address : "636 lyon street",
  hobbies : ["biking", "exploring"],
  friends : ["Chris", "Mel", "Hyeonu", "Tad"],
  favoriteColor : "blue",
 
};

// console.log(getValue(user1, "hobbies")) // => ["biking", "exploring"]
// console.log(getValue(user1, "favoriteColor")) // => "blue"


function printAllValues(obj, keys) {
    var keys = Object.keys(obj); // array of obj's keys

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        console.log(obj[key]);
    }
}

var user1 = {
  email : "user@gmail.com",
  address : "636 lyon street",
  hobbies : ["biking", "exploring"],
  isOnline : true,
  securityQuestions : {
    grandfathersName : "Art",
    favoriteColor : "blue"
  }
};


// console.log(printAllValues(user1));

// for..in block

for (var property in user1) {
    // console.log(property + " : " + user1[property])
}



// console.log(user1["securityQuestions"]["grandfathersName"])

var myDog = {
    name: "Fido",
    myKey: "???"
};

var myKey = "name";
// console.log(myDog[myKey]);   // Fido

var user = {
    email : "name@mail.com",
    friends : ["Tad", "Mel", "Chris", "Kate"]
}

function printGreetingToFriends(user) {
    var friendsArr = user.friends; // ["Tad", "Mel"]
    for (var i = 0; i < user.friends.length; i++) {
        var friend = friendsArr[i];
        console.log("Hello, " + friend);
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

function printUserNames(obj) {
    for (var property in obj) {
        var user = obj[property];
        console.log(user.name)
    }
}

function printUserFriends(obj) { // "Hayden is friends with Samantha"
    for (var property in obj) {
        var user = obj[property];
        var userFriends = user.friends; // array

        for (var i = 0; i < userFriends.length; i++) {
            var friend = userFriends[i];
            console.log(user.name + " is friends with " + friend);
        }
    }
}

// printUserFriends(allUsers);

// Counter/Frequency Object

var command = "go dog go";

function countChars(string) {
    var count = {};

    for (var i = 0; i < string.length; i++) {
        var char = string[i]; // "g"
        if (count[char] === undefined) {
            count[char] = 1;
        } else {
            count[char] += 1;
        }
        
    }

    return mostCommonChar(count);
}

function mostCommonChar(obj) {
    var maxCount = 0;
    var maxStr = "";

    for (var char in obj) { //char is the key in the object
        var num = obj[char];

        if (num >= maxCount) {
            maxCount = num;
            maxStr = char;
        }
    }

    return maxStr;
}

// console.log(countChars(command));

var iphone = {
    color: "Black",
    price: 100,
    generation: 5
}

// console.log(iphone.owner)

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
    // code here...
    var count = {};

    for (var i = 0; i < results.length; i++) {
        var vote = results[i]; // "Janice"

        if (count[vote] === undefined) {
            count[vote] = 1;
        } else {
            count[vote] += 1;
        }
    }

    return winner(count);
  };

  function winner(obj) {
      var maxCount = 0;
      var winner = "";

      for (var name in obj) {
          var count = obj[name];
          if (count > maxCount) {
              maxCount = count;
              winner = name;
          }
      }

      return "The winner is " + winner;
  }

  console.log(countVotes(votingResults)); 
  // => { Henry: 6, Janice: 8 }