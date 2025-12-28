let array = [1,2,3,4,5,6,7,8,9,10]
let whilebool = false
let whilebool2 = false

for (let index = 0; index < array.length; index++) {
    console.log('Index: ' + index + ' Value: ' + array[index])
    if (index === 9) {
        whilebool = true
    }
}
console.log('----------------');

while (whilebool) {
    for (let index = 0; index < array.length; index++) {
        console.log('Index: ' + index + ' Value: ' + array[index])
    }
    whilebool = false;
    whilebool2 = true;
}

console.log('----------------');

do {
    for (let index = 0; index < array.length; index++) {  
        console.log('Index: ' + index + ' Value: ' + array[index])
     }
    whilebool2 = false;
} while (whilebool2);

console.log('----------------');
