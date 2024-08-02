var menu = document.getElementById('menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('open')
})

menu.addEventListener('click', () => {
    menu.classList.toggle('close')
})

menu.addEventListener('click', () => {
    menu.classList.remove('no-animation')
})