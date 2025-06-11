const johnny = document.querySelector('.johnny');
const clarice = document.querySelector('.clarice');
let score = 0;
let divscore = document.querySelector('.score');

const jump = () => {
    johnny.classList.add('jump');

    setTimeout(() => {
        johnny.classList.remove('jump'); 
    }, 850)
}

const loop = setInterval(() => {
    const claricePosition = clarice.offsetLeft;
    const johnnyPosition = +window.getComputedStyle(johnny).bottom.replace('px','');

    if (claricePosition <= 80  && claricePosition > 0 && johnnyPosition < 140) {
        clarice.style.animation = 'none';
        clarice.style.left = `${claricePosition}px`;

        johnny.style.animation = 'none';
        johnny.style.bottom = '30px';

        johnny.src = 'images/jone-hurt.png';
        johnny.style.width = '85px';
        johnny.style.zIndex = 2;

        clearInterval(loop);
    } else {
        score ++;
        divscore.innerHTML = score;
    }
}, 10)

document.addEventListener('keydown', jump)