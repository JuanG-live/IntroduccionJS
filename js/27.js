// Fetch API with Async / Await

const url = 'https://jsonplaceholder.typicode.com/comments'
const urlTwo = 'https://jsonplaceholder.typicode.com/todos'
const urlthree = 'https://jsonplaceholder.typicode.com/photos'

const fetchAPI = async() => {
    try {
        const start = performance.now()

        const [response, responseTwo, responseThree] = await Promise.all([fetch(url), fetch(urlTwo), fetch(urlthree)])

        const [data, dataTwo, dataThree] = await Promise.all([response.json(), responseTwo.json(), responseThree.json()])

        console.log(data)
        console.log(dataTwo)
        console.log(dataThree)        

        const end = performance.now()
        console.log(`The Result of the first function is: ${end - start}ms`)
    } catch (error){
        console.log(error.message)
    }
}   

const fetchAPITwo = async () => {
    try {
        const start = performance.now()

        const response = await fetch (url)
        const data = await response.json()
        console.log(data)
    
        const responseTwo = await fetch (urlTwo)
        const dataTwo = await responseTwo.json()
        console.log(dataTwo)
    
        const responseThree = await fetch (urlthree)
        const dataThree = await responseThree.json()
        console.log(dataThree)
        
        const end = performance.now()
        console.log(`The result of the second function is: ${end - start}ms`)
    }catch (error) {
        console.log(error.message)
    }
}
fetchAPI();
fetchAPITwo();