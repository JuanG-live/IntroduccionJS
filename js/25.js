// Fetch API with Promises

const url = 'https://jsonplaceholder.typicode.com/posts' // API endpoint

fetch(url) // make a request to the API
    .then((response) => {
        if(response.ok) { // Check if the response is OK 
            return response.json() // Convert response to JSON
        }
        throw new Error ('Hubo un error...') // If not OK, throw an error
    })
    .then(data => console.log(data)) // show the data in the console
    .catch(error => console.log(error.message)) // show error message if something goes wrong