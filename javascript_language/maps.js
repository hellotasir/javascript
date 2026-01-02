const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

fruits.set("mangos", 100);
console.log(fruits);

fruits.get("apples");
console.log(fruits);

fruits.has("apples");
console.log(fruits);


fruits.delete("bananas");
console.log(fruits);

fruits.clear();
console.log(fruits);