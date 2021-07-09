// Objects => complex data type

let arr = [1,2,3, []];

// arr[0]

// Objects: sequence is not guaranteed
// Key - Value Pairs
// Keys: must be strings
// Values can be any kind of data type

let obj = {
    name: "Ulises",
    color: "Red",
    favFood: "Pizza",
    "favNum": 6,
    "pets": ["Cheesecake", "Pudding"],
    "partner": {"name": "Ulises Wife", "favColor": "Green", "pets": ["Bubbles", "Puddles", "Poodles"]},
    "programmer": true
};

// Dot Notation vs. Bracket Notation

    // Accessing/Getting Values from an obj

        // Dot Notation: <objName>.<keyName> => <value>
        // console.log(obj.partner);

        // Bracket Notation: <objName>[<keyName>] => value 
        // In bracker notation: the keyName must be inputted as a string
        // let key = "programmer";

        // console.log(obj["favFood"]);

        // Only time you input a non-string into bracket notation, is when you are inputting a variable holding a string
        // console.log(obj[key]);

// If a key doesn't exist inside an object, it returns undefined

    // Setting/Replacing Values from an obj

        // Dot Notation: <objName>.<keyName> => <value>
        obj.height = 67; // Setting a new Key-Value pair
        obj.color = 'Violet'; // Replacing an exsiting value
        // console.log(obj);

        // Bracket Notation: <objName>[<keyName>] => value 
        // In bracker notation: the keyName must be inputted as a string
        let key2 = "favExercise";
        obj["favFood"] = "Burgers"
        // Only time you input a non-string into bracket notation, is when you are inputting a variable holding a string
        obj[key2] = 'Running';
        
        // console.log(obj);
//////////////////////////
function getValue(obj, key) {
    return obj[key];
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

/////////////////////////////////////////////////////////

let classScores = {
    test1: 50,
    test2: 60
};

// Iteration over an Object

// for...in loop

for (let key in user1) {
    let value = user1[key];
    // console.log(key, value);
}

for (let test in classScores) {
    let value = classScores[test];
    // console.log(test, value);
}


let fightingGames = {
    sf: "Street Fighter",
    tk: "Tekken",
    kof: "King Of Fighters",
    mk: "Mortal Kombat"
}

for (let initials in fightingGames) { // let <refPoint> in <specificObj>
    let fullTitle = fightingGames[initials]; // fightingGames["sf"], fightingGames["tk"], ...
    // console.log(initials, fullTitle);
}

/////////////////////////////////////////////////////////

let specimen = {
    "color": "blue",
    "material": "furry",
    "genome": "tree",
    "age": 200,
    "fruit": ["apple", "orange", "kiwi"],
    "children": {name: "tree2", },
    season: "winter",
    relatives: {genome1: "flower", genome2: "grass", genome3:"seeds"}
};

let fruitsArr = specimen["fruit"]; // specimen.fruit ["apple", "orange", "kiwi"]

for (let i = 0; i < fruitsArr.length; i++) {
    let fruit = fruitsArr[i];
    // console.log(fruit);
}

// apple, orange, kiwi


let relativesObj = specimen.relatives; // {genome1: "flower", genome2: "grass", genome3:"seeds"}

for (let genome in relativesObj) {
    let relative = relativesObj[genome]; // relatives["genome1"], relatives["genome2"], relatives["genome3"]
    // console.log(relative);
}

// "flower", "grass", "seeds"

/////////////////////////////////////////////////////////

// Frequency Counter / Count Object

let str1 = "hello world";

function countChars(word) {
    let count = {}; // {h: 1, e: 1, l: 2, o: 1}

    for (let i = 0; i < word.length; i++) { // i = 4
        let char = word[i]; // "o"

        if (count[char] === undefined) { // this key does not exist inside the obj yet, set the value to 1
            count[char] = 1;
        } else { // if it does exist, update the value to be one greater
            count[char] += 1;
        }
    }

    return count;
} 

// console.log(countChars(str1)); 









function freqCount(str) {
    let freq = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (freq[char] === undefined) { // if the key of char doesnt exist in the freq object
            freq[char] = 1; // set new k,v pair to be char pointing to 1
        } else { // if the k,v pair is not undefined, update the existing value
            freq[char] += 1;
        }

    }

    return freq;
}

let str2 = "sweet potato";
// console.log(freqCount(str2)); // 



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

function countVotes(results) {
    let count = {};

    for (let i = 0; i < results.length; i++) { // i = 0
        let name = results[i]; // "Janice"

        if (count[name] === undefined) { // if the key doesnt exist yet in the count obj
            count[name] = 1;
        } else { // the key is already present in the object, update the existing value
            count[name] += 1;
        }
    }

    return count;
}

console.log(countVotes(votingResults)); // {Henry: 6, Janice: 8, Andrew: 3}

////////////////////////////////////////////////////////////////////////////

let pollResults = countVotes(votingResults); // {Henry: 6, Janice: 8, Andrew: 3}

/* MAX VALUE PATTERN
receive obj 

track winner name

track winner count of votes

loop over the result obj
- if current amount of votes is greater than max amt of votes
    - reassign current amount
    - reassign winner name

return winner name
*/

function classPresident(obj) {  // {Henry: 6, Janice: 8, Andrew: 3}
    let prezName = null;
    let maxVotes = null;

    for (let name in obj) {
        let currentVotes = obj[name]; 

        if (maxVotes === null || maxVotes < currentVotes) {
            maxVotes = currentVotes;
            prezName = name;
        }
    }

    return prezName + ' is the class president';
}

console.log(classPresident(pollResults)); // Janice is the class president.