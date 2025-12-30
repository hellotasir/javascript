let text = `Hello World!`;
console.log(text);

let text2 = `He's often called "Tasir"`;
console.log(text2);

let firstName = "Tasir";
let lastName = "Rahman";

let text3 = `Welcome ${firstName}, ${lastName}!`;
console.log(text3);

let length = text3.length;
console.log(length);

let text4 = text3.charAt(3);
console.log(text4); // c


let text5 = text3.charCodeAt(3);
console.log(text5);

let text6 = text3.endsWith("Rahman");
console.log(text6);

let text7 = text3.includes("Tasir");
console.log(text7);

let text8 = text3.indexOf("Rahman");
console.log(text8);

let text9 = text3.toUpperCase();
console.log(text9);

let text10 = text3.toLowerCase();
console.log(text10);

let text11 = text3.split(" ");
console.log(text11);

let text12 = text3.slice(0, 5);
console.log(text12);

let text13 = text3.substring(0, 5);
console.log(text13);

let text14 = text3.replaceAll("Tasir", "Nasir");
console.log(text14);

let text15 = text3.repeat(2);
console.log(text15);

let text16 = text3.search("Rahman");
console.log(text16);

let text17 = text3.trim();
console.log(text17);

let text18 = text3.padEnd(20, "!");
console.log(text18);


let x = 23;
let value = x.toString();
console.log(value);

let value1 = x.toFixed(33);
console.log(value1);

let value2 = x.toExponential(2);
console.log(value2);

let value3 = x.toPrecision(2);
console.log(value3);

let value4 = x.valueOf(0);
console.log(value4);

let value5 = x.toLocaleString();
console.log(value5);



let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);


