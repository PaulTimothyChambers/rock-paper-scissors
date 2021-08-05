var human = require('./Player.js');

class Game {
  constructor() {
    this.human = ;
    this.computer = ;
  }

  logWinner(human, computer) {

  }

  determineHumanChoice(playerOne, playerTwo, event) {
    var humanChoice = event.target;

    if (humanChoice.className === 'block__block--paper-choice') {
      playerTwo.scissorsChoice += 20
      playerTwo.rockChoice -= 20;
      var humanScore = playerOne.paperScore
      return humanScore

    } else if (humanChoice.className === 'block__block--rock-choice') {
      playerTwo.paperChoice += 20
      playerTwo.scissorsChoice -= 20;
      var humanScore = playerOne.rockScore
      return humanScore

    } else if (humanChoice.className === 'block__block--scissors-choice') {
      playerTwo.rockChoice += 20
      playerTwo.paperChoice -= 20;
      var humanScore = playerOne.scissorsScore
      return humanScore
    }
  }

  playerChoice(choice) {

  }

  determineComputerChoice() {
    RNG
  }

  determineWinner() {
    event.preventDefault()

    this.human = new Player();
    this.computer = new Player();


    // var selectedParent = docQuery, selectedParent.addListener(invoke determineWinner) <<<< goes in main.js

    var humanTotalScore = determineHumanChoice(this.human, this.computer);
  }

  saveWinner() {

  }

  updateWinCount() {

  }

    // DOM-changeViewToOutcome()
    // DOM-displayWinner()
    // DOM-displayDraw()
    // DOM-displayPlayerChoice()
    // DOM-displayComputerChoice()
    // DOM-showWinCount()
  setTimeout(showGameChangeButton, 3000){

  }

  setTimeout(changeViewToClassic, 3000){

  }
}
