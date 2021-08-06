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
      console.log(computerChoice)

    } else if (computerChoice === 1) { //rock
      human.paperScore += 20
      human.scissorsScore -= 20;
      console.log(computerChoice)


    } else if (computerChoice === 2) { //scissors
      human.rockScore += 20
      human.paperScore -= 20;
      console.log(computerChoice)

    }
  }

  determineWinner() {
    this.human = new Player();
    this.computer = new Player();

    // var selectedParent = docQuery, selectedParent.addListener(invoke determineWinner) <<<< goes in main.js
  }

  logWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
      this.human.winCount += 1
      displayWinner(this.human);

    } else if (humanScore < computerScore) {
      this.computer.winCount += 1
      displayWinner(this.computer);

    } else {
      displayDraw();
      setTimeout(changeViewToClassic, 3000)
      setTimeout(showGameChangeButton, 3000)
      return
    }
  }

  playerChoice(humanChoice) {
    if (humanChoice.className === 'icons__paper') {
      this.humanScore = this.human.paperScore;

    } else if (humanChoice.className === 'icons__rock') {
      this.humanScore = this.human.rockScore;

    } else if (humanChoice.className === 'icons__scissors') {
      this.humanScore = this.human.scissorsScore;
    }
    console.log('human score', this.human)
    console.log('computer score', this.computer)
    // this.logWinner(humanScore, player.score) // or var compScore = player.score
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
