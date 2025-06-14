let startButton = document.querySelector('.start');
let customButton = document.querySelector('.customButton');
let skins = document.querySelector('.skins');
const johnny = document.querySelector('.johnny');
const clarice = document.querySelector('.clarice');
const sky = document.querySelector('div.game');
let sun = document.querySelector('.sun');
let score = 0;
let divscore = document.querySelector('.score');
let gameover = document.querySelector('.gameover');

function start() {
    startButton.style.display = 'none';
    customButton.style.display = 'none';
    clarice.style.animation = 'clarice-animation 2s infinite linear';
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
            johnny.style.zIndex = 4 ;

            clearInterval(loop);

            gameover.style.display = 'block';
        } else {
            score++;
            if (score%190 == 0) {
                divscore.innerHTML = `${score / 190} Clarices`;
            }
        } 

        if (score/190 >= 21) {
            sky.style.backgroundImage = 'linear-gradient(to bottom,  rgb(11, 55, 75), purple)';
            sun.src = 'images/moon.png';
        }
    }, 10);

    document.addEventListener('keydown', jump);
}