// Methods

const letters = new Set(["a","b","c"]);

letters.add("d");
console.log(letters);

letters.delete("b");
console.log(letters);

letters.clear();
console.log(letters);

const letters2 = new Set(["a","b","c"]);

let text = letters2.has("b");
console.log(text);

let text2 = letters2.size;
console.log(text2);

let text3 = letters2.values();
console.log(text3);

let text4 = letters2.entries();
console.log(text4);

let text5 = letters2.keys();
console.log(text5);

let text6 = letters2.forEach(x => console.log(x));
console.log(text6);

// Logic

const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);

let text7 = C.values();
console.log(text7);

const D = A.intersection(B);

let text8 = D.values();
console.log(text8);

const E = A.difference(B);

let text9 = E.values();
console.log(text9);

const F = A.symmetricDifference(B);

let text10 = F.values();
console.log(text10);





