class Game {
  constructor() {
    this.human = '';
    this.computer = '';
    this.humamScore = '';
    this.humanChoice = '';
    this.computerChoice = '';
    this.winner = '';
  }


  determineClassicScores(computerChoice, human) {
    if (computerChoice === 0) { //paper
      human.scissorsScore += 20
      human.rockScore -= 20;
      this.computerChoice = './assets/pay.png'

    } else if (computerChoice === 1) { //rock
      human.paperScore += 20
      human.scissorsScore -= 20;
      this.computerChoice = './assets/rock.png'

    } else if (computerChoice === 2) { //scissors
      human.rockScore += 20
      human.paperScore -= 20;
      this.computerChoice = './assets/scissors-romero.png'
    }
  }

  determineWinner() {
    this.human = new Player('PYUNEE DUM HOOMOHN');
    this.computer = new Player('POWREFUL BAUEUATIFUL ALEIN');

    // var selectedParent = docQuery, selectedParent.addListener(invoke determineWinner) <<<< goes in main.js
  }

  logClassicWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
      this.winner = this.human.name
      this.human.winCount += 1

    } else if (humanScore < computerScore) {
      this.winner = this.computer.name
      this.computer.winCount += 1

    } else {
      this.winner = 'NOBUDDY'
    }
  }

  playerChoice(humanChoice) {
    console.log(event)
    console.log(event.target.className)
    if (humanChoice === 'game-board-classic__paper-button' || humanChoice === 'game-board-classic__paper-button-two') {
      this.humanScore = this.human.paperScore;
      this.humanChoice = './assets/pay.png'

    } else if (humanChoice === 'game-board-classic__rock-button') {
      this.humanScore = this.human.rockScore;
      this.humanChoice = './assets/rock.png'


    } else if (humanChoice === 'game-board-classic__scissors-button') {
      this.humanScore = this.human.scissorsScore;
      this.humanChoice= './assets/scissors-romero.png'
    }
  }

  determineComputerChoice(array) {
    return Math.floor(Math.random() * array.length);
  }

  // saveWinToStorage() {
  //
  // }

    // DOM-changeViewToOutcome()
    // DOM-displayWinner()
    // DOM-displayDraw()
    // DOM-displayPlayerChoice()
    // DOM-displayComputerChoice()
    // DOM-showWinCount()

}
