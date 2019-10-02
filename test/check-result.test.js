//assuming input is either rock, paper, or scissors
//9 possible outcomes means 9 tests

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('player throws rock, game throws rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const game = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, game);
    const expected = 'draw';

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('player throws paper, game throws paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const game = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, game);
    const expected = 'draw';

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('player throws scissors, game throws scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const game = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, game);
    const expected = 'draw';

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
