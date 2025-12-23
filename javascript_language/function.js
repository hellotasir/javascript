let myFunction = function (a, b) {
  return a + b;
}
console.log(myFunction(5, 10)); // 15

/* ------------------- */

let singleParamFunction = z => z * z;
console.log(singleParamFunction(7)); // 49

/* ------------------- */

let noParamFunction = () => "No parameters here!";
console.log(noParamFunction()); // "No parameters here!"

/* ------------------- */

function hoistedFunction() {
  return "I am hoisted!";
}
console.log(hoistedFunction()); // "I am hoisted!"

/* ------------------- */

let recursiveFunction = function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(recursiveFunction(5)); // 120

/* ------------------- */

let defaultParamFunction = function (x, y = 10) {
  return x + y;
}
console.log(defaultParamFunction(5)); // 15
console.log(defaultParamFunction(5, 20)); // 25

/* ------------------- */

let restParamFunction = function (...args) {
  return args.reduce((sum, current) => sum + current, 0);
}

console.log(restParamFunction(1, 2, 3, 4, 5)); // 15

/* ------------------- */

let callbackFunction = function (arr, callback) {
  return arr.map(callback);
}
console.log(callbackFunction([1, 2, 3], x => x * 2)); // [2, 4, 6]

/* ------------------- */

let IIFE = (function (name) {
  return "Hello, " + name + "!";
})("JavaScript");

console.log(IIFE); // "Hello, JavaScript!"  