const startButton = document.querySelector('.start');
const customButton = document.querySelector('.customButton');
let skins = document.querySelector('.skins');
let characterIndex = localStorage.getItem(index);
const johnny = document.querySelector('.johnny');
let johnnyGameOver = 'skins/joneghost.png';
const clarice = document.querySelector('.clarice');
const sky = document.querySelector('div.game');
const sun = document.querySelector('.sun');
const clouds = document.querySelector('.clouds');
const grass = document.querySelector('.grass');
let score = 0;
let divscore = document.querySelector('.score');
const gameover = document.querySelector('.gameover');
const reloadButton = document.querySelector('.reload');

function start() {
    grass.style.animation = 'walking 2.5s infinite linear';
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
            }, 3000);

            johnny.src = johnnyGameOver;
            johnny.style.opacity = '0.8';

            clearInterval(loop);
            clearInterval(contador);
            grass.style.animation = 'none';
            gameover.style.display = 'block';
            reloadButton.style.display = 'block';
        }

        if (score >= 20) {
            sky.style.backgroundImage = 'linear-gradient(to bottom,  rgb(11, 55, 75), purple)';
            sun.src = 'images/moon.png';
            clouds.src = 'images/bats.webp';
        }
    }, 10);
    document.addEventListener('keydown', jump);
    document.addEventListener('touchstart', jump);
}

function customize() {
    skins.style.display = 'grid';
}

function joneNovo() {
    characterIndex = 1;
    johnny.src='skins/jone-Novo.png';
    johnnyGameOver = 'skins/joneghost.png';
    skins.style.display = 'none';
}

function joneClassico() {
    characterIndex = 2;
    johnny.src='skins/jone-classico.png';
    johnny.style.bottom = '30px';
    johnnyGameOver = 'skins/jnclasghost.png'
    skins.style.display = 'none';

}

function joneChaves() {
    characterIndex = 3;
    johnny.src='skins/jone-chaves.png';
    johnnyGameOver = 'skins/jnchavesghost.png';
    skins.style.display = 'none';
}

function jonoel() {
    characterIndex = 4;
    johnny.src='skins/jone-noel.png';
    johnnyGameOver = 'skins/jonoelghost.png';
    skins.style.display = 'none';
}

function clone() {
    characterIndex = 5;
    localStorage.setItem("index", 5);
    johnny.src='skins/clone.png';
    johnnyGameOver = 'skins/cloneghost.png';
    skins.style.display = 'none';
}

function reload() {
    location.reload();
    reloadButton.style.display = 'none';
}