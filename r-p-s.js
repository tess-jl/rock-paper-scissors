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

