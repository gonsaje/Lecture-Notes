// Data Modeling 

// Arrays vs. Objects

// Objects are better with complex data
// Not good with looping and sorting

let userObj = {
    name: "Josh",
    job: "Architect",
    shirt: "Orange"
}

let userArr = [ ['name', 'Josh'], ['job', 'architect'], ["shirt", "Orange"] ];

let targetProp = "name"
for (let i = 0; i < userArr.length; i++) {
    let pair = userArr[i];
    let prop = pair[0];

    // if (prop === targetProp)
}



// Arrays are great for sorting
// require iteration for lookups
// Random Access and Sequential Access

let numbers = [9, 3, 4, 2, 10, 1];