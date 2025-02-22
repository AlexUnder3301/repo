let button = document.querySelector('.readmore-button');
let readmore = document.querySelector('.readmore');
let kartinka = document.querySelector('.readmore-img');
let height = document.querySelector('.article')

button.onclick = function() {
    readmore.classList.toggle('readmore--bigboy');
    kartinka.classList.toggle('readmore-img--bigboy');
    height.classList.toggle('article--bigboy')
}