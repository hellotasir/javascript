// Cant change the value of x
let x = "John Doe";
console.log(x);

// Can change the value of y
var y = 20;
y = 25;
console.log(y);

// Using let for block scope
let z = 10;
if (z === 10) {
    let z = 15;
    console.log(z);
}
console.log(z);

// Using const for constant value
const pi = 3.14159;
console.log(pi);

const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Toyota"; 
console.log(cars);

cars.push("Audi");
console.log(cars);

// Constant Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);
person.age = 51;
console.log(person);
person.eyeColor = "brown";
console.log(person);
person.firstName = "Jane";
console.log(person);
person.lastName = "Smith";
console.log(person);


// JavaScript has 8 Datatypes
let length = 16;                               // Number
let lastName = "Johnson";                      // String
let x1 = {firstName:"John", lastName:"Doe"};  // Object
let isActive = true;                           // Boolean
let car;                                      // Undefined
let n = null;                                 // Null
let symbol = Symbol("id");                     // Symbol
let bigInt = 1234567890123456789012345678901234567890n; // BigInt

typeof length; // Returns "number"
typeof lastName; // Returns "string"
typeof x1; // Returns "object"
typeof isActive; // Returns "boolean"
typeof car; // Returns "undefined"
typeof n; // Returns "object"
typeof symbol; // Returns "symbol"
typeof bigInt; // Returns "bigint"
console.log(typeof length);
