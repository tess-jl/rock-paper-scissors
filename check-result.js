//checks the result of the game
// takes parameters player and game 
//returns string of either draw (throws are identical), win (player wins), or lose (player loses)

const checkResult = (player, game) => {
    if (player === game) {
        return 'draw';

    } else if (player === 'rock' && game === 'paper' || player === 'paper' && game === 'scissors' || player === 'scissors' && game === 'rock') {
        return 'game wins';

    } else {
        return 'player wins';
    }
};

export default checkResult; 