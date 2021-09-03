// Objects => complex data type

// let arr = [1,2,3];
// let arr = [1,2,3, [4,5,6]]
// console.log(arr[1])

// Objects: sequence is not guaranteed
// Key-Value Pairs
// Keys must be strings*
// Values can be any kind of data type

let markObj = {
    "name": "Mark",
    "hasGlasses": true,
    "favColors": ["blue", "red", "green"],
    age: 99,
    "classMate": {"name": "Ras", "hasGlasses": false, pet: {name:"Rosco", age:14}},
    favoriteRecipe: {instructions: "boil water", ingredients:["spaghetti"]},
    favLocation: "beach",
    1: 123
}

// console.log(markObj);

// Dot Notation & Bracket Notation

    // Accessing/Getting Values in an obj

        // Dot Notation
        // <objName>.<KeyName>
            // console.log( markObj.classMate );
            
        // Bracket Notation
        // <objName>[<StringofKeyName>]
        // console.log(markObj["hasGlasses"]);
        // let key = "favLocation";

        // console.log(markObj.classMate.pet.name);

    // Setting/Wrting Values in an obj

        // Dot Notation
        // <objName>.<KeyName> = <Value>
        // console.log(markObj);

        markObj.hasCat = true

// console.log(" ")
        // console.log( markObj );
            
        // Bracket Notation
        // <objName>[<StringofKeyName>] = <Value>
        markObj["asianWallPaper"] = true
       
        let key = "favLocation";
        markObj[key] = "Mountain"

        let index = 1;
        let arr4 = [1,2,3];
        arr4[index] = 10;
        // console.log(arr4);

        // console.log(markObj);


/////////////////////////////////////////

// Iterate over an object

let testScores = {
    test1: 78,
    test2: 12,
    test3: 99,
};

// for..in loop

for (let key in testScores) { // for (let <var> in <objName>)
    // console.log(key);
    // let value = testScores[key];
    // console.log(value);
    // console.log(key);
}

// console.log(Object.keys(testScores));
// console.log(Object.values(testScores));


let specimen = {
    "color": "blue",
    "material": "pine",
    "genome": "tree",
    "age": 200,
    "fruit": ["apple", "orange", "kiwi"],
    "children": {name: "tree2", },
    season: "winter",
    relatives: {genome1: "flower", genome2: "grass", genome3:"seeds", relative4: "apple"}
};

let fruitArr = specimen.fruit; // ["apple", "orange", "kiwi"]

for (let i = 0; i < specimen.fruit.length; i++) {
    let fruit =  specimen.fruit[i];
    specimen.fruit[i] = "banana"
    // console.log(fruit);
}
// console.log(specimen);
let relativesObj = specimen.relatives;

for (let relative in relativesObj) {
    // console.log(relative)
    let name = relativesObj[relative];
    // console.log(name);
}

/////////////////////////////////////

// Frequency Counters / Count Objects

let str = "hello world";

function countChars(word) { // hello
    let count = {}; // {h: 1, e: 1, l: 2, o: 1}

    for (let i = 0; i < word.length; i++) { // i = 4
        let char = word[i]; // o

        if (count[char] === undefined) { // nothing exists yet // 1 === undefined
            count[char] = 1; // set new key value pair
        } else { // found existing value in obj
            count[char] += 1; // count['l'] += 1
        }
    }

    return count;
}

// console.log(countChars(str));

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


function countVotes(pollResults) {
    let totalVotes = {};

    for (let i = 0; i < pollResults.length; i++) {
        let vote = pollResults[i]; // "Janice";

        if (totalVotes[vote] === undefined) {
            totalVotes[vote] = 1;
        } else {
            totalVotes[vote] += 1;
        }
    }

    return totalVotes
}

console.log(countVotes(votingResults)); // {Henry:6, Janice: 8, Andrew: 3}
////////////////////////////////////////////

let result = countVotes(votingResults)

// MaxValue Pattern
function classPrez(totalCount) {
    let max = null; // track highest number of votes
    let winner = null; // track name of winner

    for (let name in totalCount) {
        let voteCount = totalCount[name];

        if (max === null || max < voteCount) {
            max = voteCount;
            winner = name;
        }
    }

    return winner + " is the class president.";
}

console.log(classPrez(result)); // Janice is the class president.