let emptyStringToNumber = Number("");
console.log(emptyStringToNumber);
console.log(typeof emptyStringToNumber);

let whitespaceStringToNumber = Number("   ");
console.log(whitespaceStringToNumber);
console.log(typeof whitespaceStringToNumber);

let nullToNumber = Number(null);
console.log(nullToNumber);
console.log(typeof nullToNumber);

let undefinedToNumber = Number(undefined);
console.log(undefinedToNumber);
console.log(typeof undefinedToNumber);

let nullToBoolean = Boolean(null);
console.log(nullToBoolean);
console.log(typeof nullToBoolean);

let undefinedToBoolean = Boolean(undefined);
console.log(undefinedToBoolean);
console.log(typeof undefinedToBoolean);

let emptyArrayToNumber = Number([]);
console.log(emptyArrayToNumber);
console.log(typeof emptyArrayToNumber);

let arrayToNumber = Number([1]);
console.log(arrayToNumber);
console.log(typeof arrayToNumber);

let multiArrayToNumber = Number([1, 2]);
console.log(multiArrayToNumber);
console.log(typeof multiArrayToNumber);

let objectToNumber = Number({});
console.log(objectToNumber);
console.log(typeof objectToNumber);

let nullLooseEquality = null == undefined;
console.log(nullLooseEquality);
console.log(typeof nullLooseEquality);

let zeroLooseEquality = 0 == "";
console.log(zeroLooseEquality);
console.log(typeof zeroLooseEquality);

let arrayLooseEquality = [] == false;
console.log(arrayLooseEquality);
console.log(typeof arrayLooseEquality);

let bigintAddition = 10n + 20n;
console.log(bigintAddition);
console.log(typeof bigintAddition);

let bigintStringConcat = 10n + "10";
console.log(bigintStringConcat);
console.log(typeof bigintStringConcat);
