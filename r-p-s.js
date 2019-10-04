// import relevant functions 
import checkResult from './check-result.js';
import getRandomThrow from './get-random-throw.js';

// initialize/fetch DOM elements
const playButton = document.getElementById('play-button'); 
// const resetButton = document.getElementById('reset-button'); 
const throwResult = document.getElementById('throw-result'); 
const playerThrow = document.getElementById('player-throw');
const gameThrow = document.getElementById('game-throw');
const numberOfDraws = document.getElementById('draws');
const numberOfGameWins = document.getElementById('game-wins');
const numberOfPlayerWins = document.getElementById('player-wins');


// set some initial state
let draw = 0;
let gameWins = 0;
let playerWins = 0;
numberOfDraws.textContent = draw;
numberOfGameWins.textContent = gameWins;
numberOfPlayerWins.textContent = playerWins;



// DOM utility functions
const playGame = () => {

    const randomGameThrow = getRandomThrow();
    const playerGameThrow = document.querySelector('input:checked').value;
    playerThrow.textContent = playerGameThrow;
    gameThrow.textContent = randomGameThrow;

    const result = checkResult(playerGameThrow, randomGameThrow);

    if (result === 'draw') {
        throwResult.textContent = `it's a draw!`;
        draw++;
        numberOfDraws.textContent = draw;
    } else if (result === 'game wins') {
        throwResult.textContent = `you lost!`;
        gameWins++;
        numberOfGameWins.textContent = gameWins;
    } else {
        throwResult.textContent = `you won!`;
        playerWins++;
        numberOfPlayerWins.textContent = playerWins;
    }
};

// const hardRest = () => {

// };



// add event listeners
// resetButton.addEventListener('click', hardRest);
playButton.addEventListener('click', playGame);