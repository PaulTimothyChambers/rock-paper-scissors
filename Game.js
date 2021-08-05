class Game {
  constructor() {
    this.human = '';
    this.computer = '';
    this.humamScore = '';
  }


  determineClassicScores(computerChoice, human) {
    if (computerChoice === 0) { //paper
      human.scissorsScore += 20
      human.rockScore -= 20;

    } else if (computerChoice === 1) { //rock
      human.paperScore += 20
      human.scissorsScore -= 20;

    } else if (computerChoice === 2) { //scissors
      human.rockScore += 20
      human.paperScore -= 20;
    }
    console.log(human.scissorsScore)
    console.log(this.human, this.computer)
  }

  determineWinner() {
    this.human = new Player();
    this.computer = new Player();
    console.log(this.human, this.computer)

    // var selectedParent = docQuery, selectedParent.addListener(invoke determineWinner) <<<< goes in main.js
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
    this.updateWinCount(winner)

    player.saveWinToStorage(winner)

    setTimeout(changeViewToClassic, 3000)

    setTimeout(showGameChangeButton, 3000)
  }

  playerChoice(human) {
    var humanChoice = event.target;

    if (humanChoice.className === 'block--paper') {
      this.humanScore = human.paperScore;

    } else if (humanChoice.className === 'block--rock') {
      this.humanScore = human.rockScore;

    } else if (humanChoice.className === 'block--scissors') {
      this.humanScore = human.scissorsScore;
    }
    console.log(this.human, this.computer)
    // this.logWinner(humanScore, player.score) // or var compScore = player.score
  }

  determineComputerChoice(array) {
    return Math.floor(Math.random() * array.length);
  }

  updateWinCount(winner) {
    winner.winCount += 1;

    // showWinCount()
  }

    // DOM-changeViewToOutcome()
    // DOM-displayWinner()
    // DOM-displayDraw()
    // DOM-displayPlayerChoice()
    // DOM-displayComputerChoice()
    // DOM-showWinCount()

}
