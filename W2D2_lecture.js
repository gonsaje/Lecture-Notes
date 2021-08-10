// Objects => complex data type

let arr = [1,2,3];
// console.log(arr[5]);

// Objects: sequence is not guaranteed
// Key-Value Pairs
// Keys must be strings
// Values can be any kind of data type

let zachObj = {
    name: "Zach Werb",
    "location": "Portland",
    "carVandalized": true,
    "age": 99,
    "favFoods": ["Toast", "Stir Fry", {"name": "Toast", "ingredients": ["bread", "toaster", "butter"]}]
};

// Dot Notation vs. Bracket Notation

    // Accessing/Getting Values from an obj

    // Dot Notation | <obj>.<keyName> => value
    // console.log(zachObj.name);

    // Bracket Notation | <obj>[<string of keyName>]
    // console.log(zachObj["carVandalized"]);
    let example = "location";
    // console.log(zachObj[example]); // zachObj["location"]

    // if a key doesn't exist in an object => returns undefined

    /////////////////////////////////////////////////////////

     // Writing/Setting Values in an obj

     // Dot Notation | <obj>.<keyName> = <value>
     zachObj.shirt = "tyedye"
    //  console.log(zachObj);

     // Bracket Notation | <obj>[<string of keyName>] = <value>
     zachObj["room"] = "kitchen"
     let exampleKey = "favColor";
     zachObj[exampleKey] = "blue"
    //  console.log(zachObj);


function getValue(obj, key) {
    return obj.key;
}

var user1 = {
    // key: "12912890128309adkaljlskdaslj",
    email : "user@gmail.com",
    address : "636 lyon street",
    hobbies : ["biking", "exploring"],
    friends : ["Chris", "Mel", "Hyeonu", "Tad"],
    favoriteColor : "blue",
};

// console.log(getValue(user1, "hobbies")) // => ["biking", "exploring"]
// console.log(getValue(user1, "favoriteColor")) // => "blue"


/////////////////////////////////////////////////////

// Iteration over an Object

let testScores = {
    test1: 97,
    test2: 67,
    test3: 45
};

// for...in loop

// console.log( Object.keys(testScores) );
// console.log( Object.values(testScores) );

for (let testId in testScores) { // for (let <var> in <objName>) {}
    let score = testScores[testId]; // intermediate var

    // console.log(score);
}

let specimen = {
    "color": "blue",
    "material": "furry",
    "genome": "tree",
    "age": 200,
    "fruit": ["apple", "orange", "kiwi"],
    "children": {name: "tree2", },
    season: "winter",
    relatives: {genome1: "flower", genome2: "grass", genome3:"seeds", relative4: "apple"}
};

// console.log( specimen["fruit"] );

let fruitsArr = specimen["fruit"];

for (let i = 0; i < fruitsArr.length; i++) {
    // console.log(fruitsArr[i]);
}

// "genome1 is a flower"
// "genome2 is a graass"

let relativesObj = specimen.relatives;

for (let genome in relativesObj) {
    let value = relativesObj[genome];
    // console.log(genome, value);
}

//////////////////////////////////////////////////

// Frequency Counters | Count Objects

let str1 = "hello world";

function countChars(string) { // hello
    let countObj = {}; // {h: 1, e: 1, l: 2, o: 1}

    for (let i = 0; i < string.length; i++) { // i = 4
        let char = string[i]; // o

        if (countObj[char] === undefined) { // key does not exist in the count object
            countObj[char] = 1; // setting a new k,v pair
        } else { // does exist in the object
            countObj[char] += 1; // update the exisiting value
        }
    }

    return countObj;
}

// console.log(countChars(str1)); // => {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, " ": 1, d: 1}


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
    "Andrew",
    "Andrew",
    "Andrew"
];

function countVotes(arr) {
    let voteCounter = {};

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];

        if (voteCounter[name] === undefined) {
            voteCounter[name] = 1;
        } else {
            voteCounter[name] += 1;
        }
    }

    return voteCounter;
}

// console.log(countVotes(votingResults)); // => {Henry: 6, Janice: 8, Andrew: 3}

let pollResults = countVotes(votingResults); // {Henry: 6, Janice: 8, Andrew: 3}

function classPresident(obj) {

}

// console.log(classPresident(pollResults)); // Janice is the class president.

function countVotes(arr) {
    let countVote = {}

    for(let i = 0; i < arr.length; i++) {
      let names = arr[i]

      if(countVote[names] === undefined) {

        countVote[names] = 1;
      } else {
        countVote[names] += 1;
      }
    }
    return countVote;
}
  console.log(countVotes(votingResults));