// Objects - Destructuring two objects or more
// Destructuring two objects or more

const product = {
    nombre: "Laptopt",
    price: 300,
    available: true
}

const client = {
    name: "Athina",
    premium: true,
    direccion: {
        city: "Madrid",
        country: "Spain"
    }
}

const { nombre } = product; // name = product.name
const { name: nameClient, direccion: {city} } = client; // nameCliente = client.name

console.log(nombre);
console.log(nameClient);

console.log(city); 