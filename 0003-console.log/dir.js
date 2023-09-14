/*

console.dir() allows you to display an interactive 
list of the properties of a specified JavaScript object.
It is useful for exploring and inspecting complex objects,
including objects with nested properties and methods.

*/

const person = {
  firstName: "Joun",
  lastName: "Doe",
  age: 30,
  address: {
    city: "New York",
    zipCode: "12345",
  },
};

// console.log(person);

console.dir(person);
