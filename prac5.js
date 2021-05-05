/* 
receive array of numbers
initialize sum variable to collet nums
loop over array of nums
create a intermediate var for each singular number
add number to sum
return is number (sum)
*/

// index starts at 0

function sumNums(numbers) { // [1,2,3]
    let sum = 0; //1

    for (var i = 0; i < numbers.length; i++) { // i = 1
        let num = numbers[i]; // num = 3

        sum += num; // 3 += 3 => 6
    }
    // console.log("this is the last i: " + i)
    return sum;
}

console.log(sumNums([1,2,3])) // => 6
console.log(sumNums([10, 12, 14])) // => 36
console.log(sumNums([-1, 5, 2])) // => 6