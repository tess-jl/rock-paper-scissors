// import relevant functions 
import checkResult from './check-result.js';
import getRandomThrow from './get-random-throw.js';

// reference the DOM elements
const playButton = document.getElementById('play-button'); // button user presses
const throwResult = document.getElementById('throw-result'); // message to update user about changed state
// DOM elements for tracking results for user
const playerThrow = document.getElementById('player-throw');
const gameThrow = document.getElementById('game-throw');

const numberOfDraws = document.getElementById('draws');
const numberOfGameWins = document.getElementById('game-wins');
const numberOfPlayerWins = document.getElementById('player-wins');


// set up application state (will change over time)
let draw = 0;
let gameWins = 0;
let playerWins = 0;

numberOfDraws.textContent = draw;
numberOfGameWins.textContent = gameWins;
numberOfPlayerWins.textContent = playerWins;

// Event-handler function 
playButton.addEventListener('click', () => {
    const randomGameThrow = getRandomThrow();
    const playerGameThrow = document.querySelector('input:checked').value;

    playerThrow.textContent = playerGameThrow;
    gameThrow.textContent = randomGameThrow;

    const result = checkResult(playerGameThrow, randomGameThrow);
    console.log(randomGameThrow, 'random game throw');
    console.log(playerGameThrow, 'player game throw');



    if (result === 'draw') {
        throwResult.textContent = 'it was a draw!';
        draw = draw + 1;
        numberOfDraws.textContent = draw;
    } else if (result === 'game wins') {
        throwResult.textContent = 'you lost!';
        gameWins = gameWins + 1;
        numberOfGameWins.textContent = gameWins;
    } else if (result === 'player wins') {
        throwResult.textContent = 'you won!';
        playerWins = playerWins + 1;
        numberOfPlayerWins.textContent = playerWins;
    }
});