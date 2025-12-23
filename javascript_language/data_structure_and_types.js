let str = "text";
let num = 42;
let big = 9007199254740991n;
let bool = true;
let undef;
let nul = null;
let sym = Symbol("id");

console.log(typeof str);
console.log(typeof num);
console.log(typeof big);
console.log(typeof bool);
console.log(typeof undef);
console.log(typeof nul);
console.log(typeof sym);

let user = { name: "Tasir", age: 30 };
console.log(user);

let numbers = [1, 2, 3, 4];
console.log(numbers);

let map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map);

let set = new Set([1, 2, 2, 3]);
console.log(set);

let weakMap = new WeakMap();
let keyObj = {};
weakMap.set(keyObj, "value");
console.log(weakMap.get(keyObj));

let weakSet = new WeakSet();
let objRef = {};
weakSet.add(objRef);
console.log(weakSet.has(objRef));

let date = new Date();
console.log(date);

let regex = /js/i;
console.log(regex.test("JavaScript"));

let err = new Error("Something went wrong");
console.log(err);

let buffer = new ArrayBuffer(8);
let int32 = new Int32Array(buffer);
int32[0] = 100;
console.log(int32);

let buf = new ArrayBuffer(16);
console.log(buf.byteLength);

let dataView = new DataView(new ArrayBuffer(4));
dataView.setInt16(0, 256);
console.log(dataView.getInt16(0));