const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.gameOver');
const clouds = document.querySelector('.clouds');
const restartButton = document.getElementById('restart-btn');
const counter = document.getElementById('counter');

let isGameOver = false;
let count = 0;

const jump = () => {
    if (isGameOver) return;
    mario.classList.add('jump');
    count++;
    counter.innerText = count;

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

document.addEventListener('keydown', jump);

const update = () => {
    if (isGameOver) return;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    let cloudsPosition = 0;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){
        isGameOver = true;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'images/marioDie.png';
        mario.style.width = '75px';
        mario.style.left = '50px';


        gameOver.style.display = 'block';

        cloudsPosition = clouds.offsetLeft;
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        restartButton.style.display = 'block';
    }
}

let gameLoop = setInterval(update, 10);

restartButton.addEventListener('click', () => {
    location.reload();
});