// Ternary

const auth = true
const count = 1000
const pay = 500
const target = true
/** if(auth) {
     console.log('Auth degree')
 } else {
     console.log('Login')
 }
 */

// auth ? console.log('Auth degree') : console.log('Login')    

pay > count || target ?
    console.log('You can pay') :
    console.log('You cannot pay')