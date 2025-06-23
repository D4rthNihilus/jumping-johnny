let startButton = document.querySelector('.start');
let customButton = document.querySelector('.customButton');
let skins = document.querySelector('.skins');
let characterIndex = 1;
const johnny = document.querySelector('.johnny');
let johnnyGameOver = 'skins/jone-hurt.png';
let johnnyGmOvSize = '85px';
const clarice = document.querySelector('.clarice');
const sky = document.querySelector('div.game');
let sun = document.querySelector('.sun');
let score = 0;
let divscore = document.querySelector('.score');
let gameover = document.querySelector('.gameover');
let reloadButton = document.querySelector('.reload');

function start() {
    startButton.style.display = 'none';
    customButton.style.display = 'none';
    clarice.style.animation = 'clarice-animation 2s infinite linear';
    let contador = setInterval(function(){
                score++;
                divscore.innerHTML = `${score} Clarices`;
            }, 2000);
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

            johnny.src = johnnyGameOver;
            johnny.style.width = johnnyGmOvSize;
            johnny.style.zIndex = 4 ;

            clearInterval(loop);
            clearInterval(contador);
            gameover.style.display = 'block';
            reloadButton.style.display = 'block';
        }

        if (score/200 >= 21) {
            sky.style.backgroundImage = 'linear-gradient(to bottom,  rgb(11, 55, 75), purple)';
            sun.src = 'images/moon.png';
        }
    }, 10);

    document.addEventListener('keydown', jump);
}

function customize() {
    skins.style.display = 'grid';
}

function joneNovo() {
    characterIndex = 1;
    johnny.src='skins/jone.png';
    johnny.style.width = '130px';
    johnnyGameOver = 'skins/jone-hurt.png';
    johnnyGmOvSize = '85px';
    skins.style.display = 'none';
}

function joneclassico() {
    characterIndex = 2;
    johnny.src='skins/iris.png';
    johnny.style.width = '115px';
    johnny.style.bottom = '10px';
    johnnyGameOver = 'skins/iris-hurt.png';
    johnnyGmOvSize = '105px';
    skins.style.display = 'none';

}

function joneChaves() {
    characterIndex = 3;
    johnny.src='skins/jone-roupa-chaves.png';
    johnny.style.width = '130px';
    johnnyGameOver = 'skins/jone-hurt.png';
    johnnyGmOvSize = '85px';
    skins.style.display = 'none';
}

function Jonoel() {
    characterIndex = 4;
    johnny.src='skins/jone-roupa-chaves.png';
    johnny.style.width = '130px';
    johnnyGameOver = 'skins/jone-hurt.png';
    johnnyGmOvSize = '85px';
    skins.style.display = 'none';
}

function Jonoel() {
    characterIndex = 4;
    johnny.src='skins/jone-roupa-chaves.png';
    johnny.style.width = '130px';
    johnnyGameOver = 'skins/jone-hurt.png';
    johnnyGmOvSize = '85px';
    skins.style.display = 'none';
}

function reload() {
    location.reload();
    reloadButton.style.display = 'none';
}