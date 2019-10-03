// import relevant functions 
import checkResult from './check-result.js';
import getRandomThrow from './get-random-throw.js';

// reference the DOM elements
//const radioButtons = document.querySelector('input:checked');

const playButton = document.getElementById('play-button');
const throwResult = document.getElementById('throw-result'); // message to update user about changed state

// DOM elements for tracking results for user
const numberOfDraws = document.getElementById('draws');
const numberOfGameWins = document.getElementById('game-wins');
const numberOfPlayerWins = document.getElementById('player-wins');


// set up application state (will change over time)
const randomGameThrow = getRandomThrow(); // returns strings rock, paper, scissors 
console.log(randomGameThrow, 'game throw');


let draw = 0;
let gameWins = 0;
let playerWins = 0;

numberOfDraws.textContent = draw;
numberOfGameWins.textContent= gameWins;
numberOfPlayerWins.textContent= playerWins;

// Event-handler function 
playButton.addEventListener('click', () => {

    const playerGameThrow = document.querySelector('input:checked').value;

    const result = checkResult(playerGameThrow, randomGameThrow);
    console.log(randomGameThrow, 'random game throw');
    console.log(playerGameThrow, 'player game throw');

    if (result === 'draw') {
        throwResult.textContent = 'it was a draw!';
        numberOfDraws.textContent = draw + 1;
        draw = draw + 1;
    } else if (result === 'game wins') {
        throwResult.textContent = 'you lost!';
        numberOfGameWins.textContent = gameWins + 1;
        gameWins = gameWins + 1;
    } else if (result === 'player wins') {
        throwResult.textContent = 'you won!';
        numberOfPlayerWins.textContent = playerWins + 1;
        playerWins = playerWins + 1;
    }


});