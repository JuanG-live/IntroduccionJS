// Fetch API con Async Await y Try Catch

const url = 'https://jsonplaceholder.typicode.com/posts' // API endpoint

/*fetch(url) 
    .then((response) => {
        if(response.ok) { 
            return response.json()
        }
        throw new Error ('There was an error...') 
    })
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
*/

const fetchAPI = async() => {
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error ('There was an error')
        }
        const data = await response.json()
        console.log(data)
    } catch(error) {
        console.log(error.message)
    }
}

fetchAPI()