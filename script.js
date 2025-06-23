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

        if (claricePosition <= 80  && claricePosition > 0 && johnnyPosition < 180) {

            clarice.style.animation = 'none';
            clarice.style.left = `${claricePosition}px`;

            johnny.style.animation = 'death 3s ease-in-out';
            setTimeout (function() {
                johnny.style.display = 'none';
            }, 3000)
    

            switch (characterIndex) {
                case 1:
                    johnny.src = 'skins/joneghost.png'
                    johnny.style.opacity = '0.8';
                    break;
                case 2:
                    johnny.src = 'skins/jnclasghost.png'
                    break;
                case 3:
                    johnny.src = 'skins/jnchavesghost.png'
                    break;
                case 4:
                    johnny.src = 'skins/jonoelghost.png'
                    break;
                case 5:
                    johnny.src = 'skins/cloneghost.png'
                    break;
                default:
                    johnny.src = 'skins/joneghost.png'
            }

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
    johnny.src='skins/jone-Novo.png';
    johnny.style.width = '95px';
    johnnyGameOver = 'skins/jone-hurt.png';
    johnnyGmOvSize = '85px';
    skins.style.display = 'none';
}

function joneClassico() {
    characterIndex = 2;
    johnny.src='skins/jone-classico.png';
    johnny.style.width = '95px';
    johnny.style.bottom = '30px';
    johnnyGameOver = 'skins/iris-hurt.png';
    johnnyGmOvSize = '105px';
    skins.style.display = 'none';

}

function joneChaves() {
    characterIndex = 3;
    johnny.src='skins/jone-chaves.png';
    johnny.style.width = '95px';
    johnnyGameOver = 'skins/jone-hurt.png';
    johnnyGmOvSize = '85px';
    skins.style.display = 'none';
}

function jonoel() {
    characterIndex = 4;
    johnny.src='skins/jone-noel.png';
    johnny.style.width = '95px';
    johnnyGameOver = 'skins/jone-hurt.png';
    johnnyGmOvSize = '85px';
    skins.style.display = 'none';
}

function clone() {
    characterIndex = 4;
    johnny.src='skins/clone.png';
    johnny.style.width = '95px';
    johnnyGameOver = 'skins/jone-hurt.png';
    johnnyGmOvSize = '85px';
    skins.style.display = 'none';
}

function reload() {
    location.reload();
    reloadButton.style.display = 'none';
}