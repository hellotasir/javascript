// Methods
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let size = fruits.length;
console.log(size);

let text = fruits.toString();
console.log(text);

let text2 = fruits.join(" ");
console.log(text2);

let text3 = fruits.pop();
console.log(text3);

let text4 = fruits.push("Kiwi");
console.log(text4);

let text5 = fruits.shift();
console.log(text5);

let text6 = fruits.unshift("Lemon");
console.log(text6);

let text7 = fruits.slice(1, 3);
console.log(text7);

let text8 = fruits.splice(1, 2);
console.log(text8);

let text9 = fruits.sort();
console.log(text9);

let text10 = fruits.reverse();
console.log(text10);

// Search

let text11 = fruits.indexOf("Apple");
console.log(text11);

let text12 = fruits.lastIndexOf("Apple");
console.log(text12);

let text13 = fruits.includes("Apple");
console.log(text13);

let text14 = fruits.find(x => x === "Apple");
console.log(text14);

let text15 = fruits.findIndex(x => x === "Apple");
console.log(text15);

// Iterations

let text16 = fruits.forEach(x => console.log(x));

let text17 = fruits.every(x => x === "Apple");
console.log(text17);

let text18 = fruits.some(x => x === "Apple");
console.log(text18);

let text19 = fruits.map(x => x.toUpperCase());
console.log(text19);

let text20 = fruits.filter(x => x === "Apple");
console.log(text20);

let text21 = fruits.reduce((a, b) => a + b);
console.log(text21);





