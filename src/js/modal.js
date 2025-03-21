const feedbackButton = document.querySelector('.menu-footer__chat-icon')
const callorderButton = document.querySelector('.menu-footer__call-icon')
const closeButton = document.querySelectorAll('.close-icon')

feedbackButton.addEventListener('click', () => {
  const modal = document.querySelector('.feedback-box')
  const menu = document.querySelector('.menu')
  menu.classList.remove('menu--active')
  modal.classList.add('modal--shown')
})

callorderButton.addEventListener('click', () => {
  const modal = document.querySelector('.callorder-box')
  const menu = document.querySelector('.menu')
  menu.classList.remove('menu--active')
  modal.classList.add('modal--shown')
})

const closeButtonHandler = (element, i) => {
  element.addEventListener('click', () => {
    const modalCollection = document.querySelectorAll('.modal')
    modalCollection[i].classList.remove('modal--shown')
  })
  document.addEventListener('click', (event) => {
    const modalCollection = document.querySelectorAll('.modal')
    const isClickInsideMenu = modalCollection[i].contains(event.target)
    const isClickOnModalButton =
      event.target === feedbackButton || event.target === callorderButton
    if (!isClickInsideMenu && !isClickOnModalButton) {
      modalCollection[i].classList.remove('modal--shown')
    }
  })
}

for (let i = 0; i < closeButton.length; i++) {
  closeButtonHandler(closeButton[i], i)
}
