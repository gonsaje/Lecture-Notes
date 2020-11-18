// Hello Jae!
// We are team Jaecob

/***********************************************************************
Write a function uniqueCharsInWords(sentence) that takes in a sentence and returns
true if every word contains only unique characters and returns false otherwise.
The same character can appear across differenet words, but within a single word
no character should appear more than once.
***********************************************************************/
function repeatChar(word) {
    for (var i = 0; i < word.length; i++) {
        for (var j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return false;
            }
        }
    }
    return true;
}

function uniqueCharsInWords(string) {
    var words = string.split(' ');
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (!repeatChar(word)) {
            return false;
        }
    }
    return true;
}
console.log(uniqueCharsInWords('this has repeated chars'));//=> false
console.log(uniqueCharsInWords('this has no duplicate chars'));//=>true
console.log(uniqueCharsInWords('javascript is fun'));//=> false
console.log(uniqueCharsInWords('coding is fun'));//=> true