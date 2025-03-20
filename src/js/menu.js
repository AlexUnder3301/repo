const menuButton = document.querySelector('.header-container__menu-icon')
const closeButton = document.querySelector('.menu-header__close-icon')

menuButton.addEventListener('click', () => {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu--active')
})

closeButton.addEventListener('click', () => {
    const menu = document.querySelector('.menu')
    menu.classList.remove('menu--active')
})

document.addEventListener('click', (event) => {
    const menu = document.querySelector('.menu') 
    const isClickInsideMenu = menu.contains(event.target)
    const isClickOnMenuButton = event.target === menuButton
    if(!isClickInsideMenu && !isClickOnMenuButton) {
        menu.classList.remove('menu--active')
    }
})