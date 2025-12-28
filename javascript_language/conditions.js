//Boolean
let appleIsaFruit = true;

//If
if (appleIsaFruit == true){
    console.log("Yes, it is a fruit");
}

// If-else
if (appleIsaFruit){
    console.log("Yes, it is a fruit");
} else {
    console.log("No, it is not a fruit");
}

//Ternary
let myAge = 24 ? "I am an Adult" : "I am a Child";
console.log(myAge);

//Switch 
let day = 2;
switch (day) {
    case 0:
        console.log("Sunday");
        break;  
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
}


//Logical 
let x = 5;
let y = 10;
let z = 15;

let answer = x < y && y < z;
console.log(answer);

let answer2 = x < y || y > z;
console.log(answer2);

