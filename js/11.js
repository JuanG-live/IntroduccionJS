// Destructuring Arrays Example

// Basic example
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3

// Skipping elements
const colors = ['red', 'green', 'blue'];
const [primary, , tertiary] = colors;
console.log(primary); // 'red'
console.log(tertiary); // 'blue'

// Default values
const fruits = ['apple'];
const [fruit1, fruit2 = 'banana'] = fruits;
console.log(fruit1); // 'apple'
console.log(fruit2); // 'banana'

// Swapping variables
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a); // 20
console.log(b); // 10

// Nested arrays
const nested = [1, [2, 3], 4];
const [one, [two, three], four] = nested;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
console.log(four); // 4