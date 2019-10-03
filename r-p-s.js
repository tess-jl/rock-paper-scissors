// import relevant functions 
import checkResult from './check-result.js';
import getRandomThrow from './get-random-throw.js';

// reference the DOM elements
const radioButtons = document.querySelector('input:checked');

const playButton = document.getElementById('play-button');
const throwResult = document.getElementById('throw-result'); // either draw, win, lose
// DOM elements for tracking results for user
const numberOfDraws = document.getElementById('draws');
const numberOfGameWins = document.getElementById('game-wins');
const numberOfPlayerWins = document.getElementById('player-wins');


// set up application state (will change over time)
const randomGameThrow = getRandomThrow(); // returns strings rock, paper, scissors
const playerGameThrow = // need to reference radio elements 

let draws = 0;
let gameWins = 0;
let playerWins = 0;


// Event-handler function 
playButton.addEventListener('click', () => {
    const gameResult = checkResult(playerGameThrow, randomGameThrow);

    const selectedTool = document.querySelector('input:checked');
});


// if (won) {
//     message.textContent = 'You Won!';
//     wins++;
//     winCount.textContent = wins;
// }
// else {
//     message.textContent = 'You Lost!';
//     losses++;
//     lossCount.textContent = losses;
// }