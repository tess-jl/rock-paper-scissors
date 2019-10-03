//checks the result of the game
// takes parameters player and game 
//returns string of either draw (throws are identical), win (player wins), or lose (player loses)

const checkResult = (player, game) => {
    if (player === 'rock' && game === 'rock') {
        return 'draw';
    } else if (player === 'paper' && game === 'paper') {
        return 'draw';
    } else if (player === 'scissors' && game === 'scissors') {
        return 'draw';
    } else if (player === 'rock' && game === 'paper') {
        return 'game wins';
    } else if (player === 'paper' && game === 'scissors') {
        return 'game wins';
    } else if (player === 'scissors' && game === 'rock') {
        return 'game wins';
    } else if (player === 'rock' && game === 'scissors') {
        return 'player wins';
    } else if (player === 'paper' && game === 'rock') {
        return 'player wins';
    } else if (player === 'scissors' && game === 'paper') {
        return 'player wins';
    }
};

export default checkResult; 