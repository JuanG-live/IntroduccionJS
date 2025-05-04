// Objects - Destructuring two objects or more
const product = {
    name: "Laptopt",
    price: 300,
    available: true
}

const client = {
    name: "Athina",
    premium: true,
}

/*
const basket = {
    quantity: 2,
    ...product // Spread operator to copy properties from product
}
console.log(basket); 
*/

const newObject = {
    ...product, // Spread operator to copy properties from product
    ...client, // Spread operator to copy properties from client
}

console.log(newObject); // { nombre: 'Laptopt', price: 300, available: true, name: 'Athina', premium: true }

const newObject2 = Object.assign(product, client); // Object.assign() to copy properties from client to product
console.log(newObject2);
    