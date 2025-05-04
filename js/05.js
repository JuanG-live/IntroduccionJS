// Object Manipulation in JavaScript
const person = {
    name: "John",
    age: 30,
    city: "New York",
    available: true
};
//Object.freeze(persona); // Prevents any changes to the object
//Object.seal(person); // Prevents new properties from being added and existing properties from being removed

// Add a new property
person.country = "USA";

// Update an existing property
person.age = 31;
person.available = false;

// Delete a property
delete person.city;

console.log(person);