class BowlingGame {
    constructor() {
        this.strike = false
        this.spare = false
        this.rounds = 10
        this.pins = 10
        this.throws = 2
        this.roundScore = 0
        this.totalScore = 0

        this.board = [
            {
                firstThrow:0,
                secondThrow:0,
                thirdThrow:"",
                totalScore:0,
                roundScore:0
            },
            {
                firstThrow:0,
                secondThrow:0,
                thirdThrow:"",
                totalScore:0,
                roundScore:0
            },
            {
                firstThrow:0,
                secondThrow:0,
                thirdThrow:"",
                totalScore:0,
                roundScore:0
            },
            {
                firstThrow:0,
                secondThrow:0,
                thirdThrow:"",
                totalScore:0,
                roundScore:0
            },
            {
                firstThrow:0,
                secondThrow:0,
                thirdThrow:"",
                totalScore:0,
                roundScore:0
            },
            {
                firstThrow:0,
                secondThrow:0,
                thirdThrow:"",
                totalScore:0,
                roundScore:0
            },
            {
                firstThrow:0,
                secondThrow:0,
                thirdThrow:"",
                totalScore:0,
                roundScore:0
            },
            {
                firstThrow:0,
                secondThrow:0,
                thirdThrow:"",
                totalScore:0,
                roundScore:0
            },
            {
                firstThrow:0,
                secondThrow:0,
                thirdThrow:"",
                totalScore:0,
                roundScore:0
            },
            {
                firstThrow:0,
                secondThrow:0,
                totalScore:0,
                thirdThrow:0,
                roundScore:0
            }
        ]
    }

    firstThrow(board){
        let firstThrow = Math.floor(Math.random() * this.pins ) + 1
        board.firstThrow = firstThrow
        this.pins -= firstThrow

        if(firstThrow == 10){
            this.strike = true
            this.pins = 10
        }
    }

    secondThrow(board){
        let secondThrow = Math.floor(Math.random() * this.pins) + 1
        board.secondThrow = secondThrow

        if(secondThrow == this.pins){
            this.spare = true
        }
        this.pins = 10
    }

    thirdThrow(board){
        let thirdThrow = Math.floor(Math.random() * this.pins) + 1
        board.thirdThrow = thirdThrow
    }
    
    startGame(){
        for(let i = 0; i < this.rounds; i++){
            this.firstThrow(this.board[i])

            if(this.strike == true){
                this.board[i].roundScore = this.board[i].firstThrow + this.board[i].secondThrow
                this.roundScore += this.board[i].roundScore
                this.strike = false
                
                continue
            }
            this.secondThrow(this.board[i])
            this.board[i].roundScore = this.board[i].firstThrow + this.board[i].secondThrow
        }
        this.updateroundScore()
    }

    updateroundScore(){
        for(let i = 0; i < this.board.length; i++){
            if( i != 9 ){
                if(this.board[i].firstThrow === 10){
                    this.board[i].roundScore += this.board[i+1].firstThrow

                    if(this.board[i] == 8 && this.board[9].firstThrow == 10 && this.board[8].firstThrow == 10){
                        this.board[i].roundScore += this.board[i+1].firstThrow + this.board[i+1].secondThrow

                        continue
                    }

                    if(this.board[i+1].firstThrow === 10){
                        if(this.board[i+2].firstThrow === 10){
                            this.board[i].roundScore += this.board[i+2].firstThrow
                        }
                    } else {
                        this.board[i].roundScore += this.board[i+1].secondThrow
                    }
                } else if((this.board[i].firstThrow + this.board[i].secondThrow) == 10){
                    if(i != 9){
                        this.board[i].roundScore += this.board[i+1].firstThrow
                    }
                }
            } else {
                if(this.board[i].firstThrow === 10){
                    this.board[i].secondThrow = Math.floor(Math.random() * this.pins) + 1
                    this.board[i].thirdThrow = Math.floor( Math.random() * this.pins) + 1
                    this.board[i].roundScore += this.board[i].secondThrow + this.board[i].thirdThrow
                } else if ((this.board[9].firstThrow + this.board[9].secondThrow) == 10){
                    this.board[9].thirdThrow = Math.floor( Math.random() * this.pins) + 1
                    this.board[9].roundScore +=  this.board[i].thirdThrow
                }
                else if((this.board[i].firstThrow + this.board[i].secondThrow) == 10){
                    continue
                }
            }
            this.roundScore += this.board[i].roundScore

            this.totalScore += this.board[i].roundScore
            this.board[i].totalScore  += this.totalScore
        }

        this.board[9].totalScore = this.roundScore + this.board[9].thirdThrow
        console.table(this.board)
        console.log(`The final score obtained for this game is: ${(this.roundScore + this.board[9].thirdThrow)}`)
    }
 
}

module.exports = BowlingGame
