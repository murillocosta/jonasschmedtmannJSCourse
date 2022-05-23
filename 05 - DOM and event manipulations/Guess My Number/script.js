'use strict';

const newSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

let secretNumber = newSecretNumber();
document.querySelector('.number').textContent = '?';
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}
const displayScore = function(score) {
    document.querySelector('.score').textContent = score
}
const displayNumber = function(number) {
    document.querySelector('.number').textContent = number
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {        
        displayMessage('No number! ⛔')
        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number! ✨');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        displayNumber(secretNumber);

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
            score--;
            displayScore(score);
        } else {
            displayMessage('You lost the game! 🧨');
            displayScore(0);
        }
    }
});

// reset game
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = newSecretNumber();
    displayMessage('Start guessing...');
    displayScore(score);
    displayNumber('?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})