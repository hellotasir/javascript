const car = {type:"Fiat", model:"500", color:"white"};


const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.firstName);
console.log(person.fullName());



const person2 = {
  name: "John",
  age: 30,
  city: "New York"
};

const myArray = Object.values(person2);

let text = myArray.toString();

console.log(text);

const person3 = {
  name: "John",
  age: 30,
  city: "New York"
};

let text2 = JSON.stringify(person3);

console.log(text2);
