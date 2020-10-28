4 + 4 / 2

(2 + -7) * 3

101 % 10

12 - 4 % 3

true && false

true && !(false || false)

!true && !(false || false)

'cat' + 'dog'

2 + 'pizza'

2.5 * 'fish'

5 >= 11

5 === 5.0

7 !== 7.1

5 + 5 > 8

6 + 6 !== 12

2 > 1 || false

'true' === true

10 % 2 === 0

21 % 2 === 0

21 % 2 !== 0

21 % 2 === 1

12 % 3 === 0

9 % 3 === 0

14 % 3 === 0

'new york'[0]

'new york'[1]

'san francisco'[2 * 3]

'bootcamp'[3].toUpperCase()

'bootcamp'.indexOf('T')

'bootcamp'.indexOf('camp')

'bootcamp'.indexOf('o') > -1

'science'.indexOf('x') === -1



// 1
var idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx); // ?
idx * 2;
console.log(idx); // ?
// 2
var num = 33;
var isEven = num % 2 === 0;
console.log(isEven); // ?
console.log(!isEven); // ?
// 3
var str1 = 'marker';
var num = 'whiteboard'.length - str1.length;
console.log(num); // ?
var str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // ?
var char = str2[num].toLowerCase(); // ?
console.log(char + '!'); // ?
// 4
var sentence = 'welcome to bootcamp prep';
var lastChar = sentence[sentence.length - 1];
console.log(lastChar); // ?
console.log(sentence.indexOf(lastChar)); // ?

//CONDITIONALS

// 5
var age = 30; // try different numbers here

if (age > 30) {
  console.log('older than 30');
} else {
  console.log('younger than 30');
}
// 6
var str = 'pizza'; // try different strings here

if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string');
}
if (str[0] === 'p') {
  console.log('starts with p');
}
// 7
var num = 15; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3');
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}
// 8
var num = 15; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3');
}
if (num % 5 === 0) {
  console.log('divisible by 5');
}
// 9
var str = 'App AcademY'; // try different strings here

if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}
// 10
var num = -44; // try different numbers here

if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative');
} else {
  console.log(0);
}
if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}

var num = 11; // feel free to change the value of this variable
if (num > 5) {
  console.log('if');
}
var num = 5; // feel free to change the value of this variable
if (num > 5) {
  console.log('if');
} else {
  console.log('else');
}
var num = 0; // feel free to change the value of this variable
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}