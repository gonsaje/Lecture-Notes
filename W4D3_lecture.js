// a. function calling a function calling a function without recursion

         function f1(num) { //1 - 4
            if (num === 5) {
                return;
            }
            console.log(num); // 1
            f1(num + 1);
          }

        //   function f2(num) { // 2
        //     console.log(num); // 2
        //     f3(num + 1);
        //   }

        //   function f3(num) { //3
        //     console.log(num); //
        //     f4(num + 1);
        //   }

        //   function f4(num) {//4
        //     console.log(num); //
        //   }

        //   f1(5);
        //   f1(1);

          // First In Last Out

// function f1(num) {
//     f2(num + 1);
//     console.log(num);
// }

// function f2(num) {
//     f3(num + 1);
//     console.log(num);
// }

// function f3(num) {
//     f4(num + 1);
//     console.log(num);
// }

// function f4(num) {
//     console.log(num);
// }

// f1(1);

// function f1(num) { //1
//     num = f2(num + 1);
//     console.log(num);
//     return num; //
//   }

//   function f2(num) { // 2
//     num = f3(num + 1); // 4
//     console.log(num);
//     return num;
//   }

//   function f3(num) { // 3 
//     num = f4(num + 1); // 4
//     console.log(num); // 4
//     return num; // 4
//   }

//   function f4(num) { // 4
//     console.log(num);
//     return num;
//   }

//   console.log(f4(1));
       



function countdown(max) {
    if (max < 0){
        return;
    }

    console.log(max);
    countdown(max - 1);
}

// countdown(10); // 10, 9, 8... 0


function countDown(max, min) {
    if (max === min) {
      return;
    }

    console.log(max);

    countDown(max - 1, min);
}

// countDown(15, 5); //15, 14, 13...5

function countDown(max, min) {
    if (max === min) {
      return;
    }

    console.log(max);

    countDown(max - 1, min);
}

// countDown(15, 5); //15, 15
function countDown(max, min) {
    if (max < min) {
      return;
    }

    console.log(max);

    countDown(max - 3, min);
}

// countDown(15, 5);//15, 12, 9, 6, 3, 0...

function factorial(num) { // 4
    if (num === 0 || num === 1) return 1;
    return factorial(num - 1) * num;
}

// console.log(factorial(4)); // 3 * factorial(2) => 3 * 2 * 1

function fibonacci(num) {
    if (num === 1 || num === 0) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(6)); // => 13 (1, 1, 2, 3, 5, 8, 13)

// memoization: while we're making function calls,
// as soon as a value is found, it gets stored
// ex. fib(3) gets stored for when we check for fib(4) and greater