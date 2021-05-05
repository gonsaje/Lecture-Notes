function buildDog(name, breed, toys) {
    let dogObj = {
        name: name
    };

    dogObj.breed = breed; // 'Fido'
    dogObj["toys"] = toys;

    return dogObj;
}

// console.log(buildDog('Fido', 'Bulldog', ['rope', 'shoe', 'ball'])); // => {name: "Fido", breed:}

let dog1 = buildDog('Fido', 'Bulldog', ['rope', 'shoe', 'ball'])

function grabSecondToy(dog) {
    // let toysArr = dog.toys; //  arr

    // return toysArr[1];

    for (let key in dog) {
        let value = dog[key];

        if (Array.isArray(value)) {
            return value[1];
        }
    }

    return "no toys";
}

// console.log(grabSecondToy(dog1)) // => 'shoe'




var user2 = {
    email : "user@gmail.com",
    address : "636 lyon street",
    hobbies : ["biking", "exploring"],
    isOnline : true,
    securityQuestions : {
      grandfathersName : "Art",
      favoriteColor : "blue"
    }
};

var user3 = {
    email : "user3@gmail.com",
    address : "752 lyon street",
    hobbies : ["bfishing", "exploring"],
    isOnline : true,
    securityQuestions : {
      firstCar : "Camry",
      hometown : "New Haven",
      mothersMaidenName: "Smith"
    }
};

function printSecQues(user) { // obj
    // questionObj represents the value stored in user object at the specific key of securityQuestions
    let questionObj = user["securityQuestions"]; // { grandfathersName : "Art", favoriteColor : "blue"}

    for (let question in questionObj) { // for (let <key> in <obj>)
        let answer = questionObj[question];
        console.log(question + " is " + answer);
    }
}

printSecQues(user2) //=>> grandfathersName is Art, favoriteColor is blue
console.log(" ")
printSecQues(user3) //=>>firstCar is "Camry", hometown is "New Haven", mothersMaidenName is "Smith"