// DOM EVENTS - FORM AND VALIDATE

const form = document.querySelector('#formulario')
form.addEventListener('submit', e => {
    e.preventDefault()

    const name = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value

    // Prevenir alertar
    const alertaPrevia = document.querySelector('.alerta')
    if (alertaPrevia){
        alertaPrevia.remove()
    }

    const alert = document.createElement('DIV')
    alert.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')

    if (name === '' || password === ''){
        alert.textContent = 'Todos los campos son obligatorios...'
        alert.classList.add('bg-red-500')
    } else {
        alert.textContent = 'Perfecto, iniciando sesion...'
        alert.classList.add('bg-green-500')
    }


    form.appendChild(alert)
})