/***********************************************************************
You have a walking robot. Given a string of compass directions (e.g., "nesw" or
"nnssen"), it will travel one mile in each of those directions. Write a function
to determine wether a set of directions will lead your robot to
its starting position

***********************************************************************/

/* 

object that stores the distance in each direction
y-axis| n: 1, s: -1
x-axis| e: 1, w: -1

starting point at x = 0, and y = 0

how do we know at the end that we are back at the starting point?
if at the end both coordinates are at 0 => we are at the starting point => validWalk


*/

function validWalk(directions) {
    let yAxis = 0;
    let xAxis = 0;

    for (let i = 0; i < directions.length; i++) {
        let curr = directions[i];

        if (curr.includes('n')) {
            yAxis++;
        } else if (curr.includes('s')) {
            yAxis--;
        } else if (curr.includes("e")) {
            xAxis++;
        } else if (curr.includes('w')) {
            xAxis--;
        }
    }

    if (yAxis === 0 && xAxis === 0) {
        return true;
    }

    return false;
}

console.log(validWalk("nnnn"))//=> false
console.log(validWalk("nenessww"))//=> true
console.log(validWalk("nnnwww"))//=> false
console.log(validWalk("nnesws"))// => true



/***********************************************************************
Write a function uniqueCharsInWords(sentence) that takes in a sentence and returns
true if every word contains only unique characters and returns false otherwise.
The same character can appear across different words, but within a single word
no character should appear more than once.
***********************************************************************/

function uniqueCharsInWords(string) {

}

//console.log(uniqueCharsInWords('this has repeated chars'));//=> false
//console.log(uniqueCharsInWords('this has no duplicate chars'));//=>true
//console.log(uniqueCharsInWords('javascript is fun'));//=> false
//console.log(uniqueCharsInWords('coding is fun'));//=> true