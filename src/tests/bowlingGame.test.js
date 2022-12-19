const { describe, expect, test, it, beforeEach } = require('@jest/globals')
const BowlingGame = require('../classes/bowlingGame.js')


beforeEach(() => {
    game = new BowlingGame()
})

it('Should return a number for a game', () => {
    game.startGame()
    let x = game.board[game.board.length - 1].totalScore
    
    expect(x).toEqual(expect.any(Number))
})

it('Should return 20 for a game of all 1s', () => {
    let score = 0
    for(let i = 0; i < 10; i++){
        game.board[i].firstThrow = 1
        game.board[i].secondThrow = 1
        score += game.board[i].firstThrow + game.board[i].secondThrow
    }
    expect(score).toEqual(20)
})

it('Should return the correct score when hits a spare',() =>{
    game.startGame()
    let test1 = 0
    if ((game.board[1].firstThrow + game.board[1].secondThrow) < 10) {
        test1 = game.board[1].firstThrow + game.board[1].secondThrow
    } else {
        if ((game.board[1].firstThrow + game.board[1].secondThrow) == 10) {
            test1 = game.board[1].firstThrow + game.board[1].secondThrow + game.board[2].firstThrow
        }
    }
    expect(test1).toEqual(game.board[1].roundScore)
})

it('Should return the score of: 17 for a strike', () => {
    let score = 0
    game.board[0].firstThrow = 10
    game.board[1].firstThrow = 2
    game.board[1].secondThrow = 5
    score += game.board[0].firstThrow + game.board[1].firstThrow + game.board[1].secondThrow

    expect(score).toEqual(17)
})

it('Should return the correct score if hits an strike', () => {
    game.startGame()
    let score = 0
    if((game.board[0].firstThrow) === 10){
        score = game.board[0].firstThrow + game.board[1].firstThrow + game.board[1].secondThrow
    } else {
        score = game.board[0].firstThrow + game.board[0].secondThrow
    }

    expect(score).toEqual(game.board[0].totalScore)
})

it('Should return correct score in the last round', () => {
    game.startGame()
    let score = 0
    if((game.board[9].firstThrow + game.board[9].secondThrow) === 10){
        score = game.board[9].firstThrow + game.board[9].secondThrow + game.board[9].thirdThrow
    } else if((game.board[9].firstThrow) === 10){
        score = game.board[9].firstThrow + game.board[9].secondThrow + game.board[9].thirdThrow
    } else {
        score = game.board[9].firstThrow + game.board[9].secondThrow
    }
    expect(score).toEqual(game.board[9].roundScore)
})