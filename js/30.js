// DOM EVENTS - CLICKS
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

heading.addEventListener('mouseenter', () => {
    heading.textContent = 'This new'
})

heading.addEventListener('mouseleave', () => {
    heading.textContent = 'Im back'
})

enlaces.forEach(enlaces => {
    enlaces.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.textContent = 'diste click'
        console.log('Someone here?')
    })
})

