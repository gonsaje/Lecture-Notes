

function myFunc() {
    
    console.log("before")
    for (let i = 0; i < 5; i++) { // 4
        if (i === 4) {
            
            // break; // stops the loop and exits only the loop
            // continue; // skipping a single iteration
            return i; // ends and exits the entire function
        }
        console.log("during: when i is equal to " + i);
    }
    console.log("after");
}


console.log(myFunc());