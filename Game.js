var player = require('./Player.js');

class Game {
  constructor() {
    this.human = ;
    this.computer = ;
  }

  logWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
      player.saveWinToStorage(this.human);
      displayWinner(this.human);
      var winner = this.human

    } else if (humanScore < computerScore) {
      player.saveWinToStorage(this.computer);
      displayWinner(this.computer);
      var winner = this.computer

    } else {
      displayDraw();
      setTimeout(changeViewToClassic, 3000)
      setTimeout(showGameChangeButton, 3000)
      return
    }
    updateWinCount(winner)

    player.saveWinToStorage(winner)

    setTimeout(changeViewToClassic, 3000)

    setTimeout(showGameChangeButton, 3000)
  }

  determineClassicScores(human) {
    if (determineComputerChoice(['paper', 'rock', 'scissors']) === 'paper') { //paper
      human.scissorsChoice += 20
      human.rockChoice -= 20;

    } else if (determineComputerChoice(['paper', 'rock', 'scissors']) === 'rock') { //rock
      human.paperChoice += 20
      human.scissorsChoice -= 20;

    } else if (determineComputerChoice(['paper', 'rock', 'scissors']) === 'scissors') { //scissors
      human.rockChoice += 20
      human.paperChoice -= 20;
    }
    playerChoice(human);
  }

  playerChoice(human) {
    var humanChoice = event.target;

    if (humanChoice.className === 'block--paper') {
      var humanScore = human.paperScore;

    } else if (humanChoice.className === 'block--rock') {
      var humanScore = human.rockScore;

    } else if (humanChoice.className === 'block--scissors') {
      var humanScore = human.scissorsScore;
    }
    logWinner(humanScore, player.score) // or var compScore = player.score
  }

  determineComputerChoice(array) {
    return Math.floor(Math.random() * array.length);
  }

  determineWinner() {
    event.preventDefault()

    this.human = new Player();
    this.computer = new Player();

    // var selectedParent = docQuery, selectedParent.addListener(invoke determineWinner) <<<< goes in main.js
    determineClassicScores(this.human);


  }

  updateWinCount(winner) {
    winner.winCount += 1;

    showWinCount()
  }

    // DOM-changeViewToOutcome()
    // DOM-displayWinner()
    // DOM-displayDraw()
    // DOM-displayPlayerChoice()
    // DOM-displayComputerChoice()
    // DOM-showWinCount()

}
