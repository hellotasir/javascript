const letters = ["a","b","c"];

for (const x of letters) {
  console.log(x);

}

const myIterator = Iterator.from([1, 2, 3]);
let text = "";
for (const x of myIterator) {
  text += x;
}
console.log(text);