const readmoreCollection = document.querySelectorAll('.readmore-button')
const height = document.querySelectorAll('.article')
let isOpened = false

const readmoreClickHandler = (element, i) => {
    element.addEventListener('click', () => {
        const readmoreImg = element.children[0]
        const readmoreText = element.children[1]

        height[i].classList.toggle('article--bigboy')
        readmoreImg.classList.toggle('readmore-img--bigboy')

        if (isOpened) {
            readmoreText.textContent = readmoreText.dataset.ogText
            isOpened = false
        }
        else {
            readmoreText.textContent = 'Скрыть'
            isOpened = true
        }
    })
}

for (let i = 0; i < readmoreCollection.length; i++) {
    readmoreClickHandler(readmoreCollection[i], i)
}