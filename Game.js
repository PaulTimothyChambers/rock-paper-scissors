class Game {
  constructor() {
    this.human = '';
    this.computer = '';
    this.humanScore = '';
    this.humanChoice = '';
    this.computerChoice = '';
    this.winner = '';
  }

  computerWins(parsedWinCountHuman, parsedWinCountComputer) {
    this.winner = this.computer.name;
    parsedWinCountComputer += 1;
    updateComputerWinCount(parsedWinCountComputer)
    this.computer.saveComputerWinToStorage(parsedWinCountComputer);
  }

  determineClassicScores(computerChoice) {
    if (computerChoice === 0) {
      this.human.scissorsScore += 20;
      this.human.rockScore -= 20;
      this.computerChoice = './assets/paypear.png';

    } else if (computerChoice === 1) {
      this.human.paperScore += 20;
      this.human.scissorsScore -= 20;
      this.computerChoice = './assets/rock.png';

    } else if (computerChoice === 2) {
      this.human.rockScore += 20;
      this.human.paperScore -= 20;
      this.computerChoice = './assets/scissors-romero.png';
    }
  }

  determineComputerChoice(array) {
    return Math.floor(Math.random() * array.length);
  }

  determineComputerWins(computerChoice) {
    this.computerChoice = './assets/secret-alien.png';
  }

  determineDifficultScores(computerChoice, human) {
    if (computerChoice === 0) {
      this.human.scissorsScore += 20;
      this.human.secretAlienScore += 20;
      this.human.biggerAlienScore += 20;
      this.human.rockScore -= 20 ;
      this.human.alienScore -= 20;
      this.human.wimpyAlienScore -= 20;
      this.computerChoice = './assets/paypear.png';

    } else if (computerChoice === 1) {
      this.human.paperScore += 20;
      this.human.alienScore += 20;
      this.human.secretAlienScore += 20;
      this.human.scissorsScore -= 20 ;
      this.human.biggerAlienScore -= 20;
      this.human.wimpyAlienScore -= 20;
      this.computerChoice = './assets/rock.png';

    } else if (computerChoice === 2) {
      this.human.rockScore += 20;
      this.human.biggerAlienScore += 20;
      this.human.wimpyAlienScore += 20;
      this.human.paperScore -= 20 ;
      this.human.secretAlienScore -= 20;
      this.human.alienScore -= 20;
      this.computerChoice = './assets/scissors-romero.png';

    } else if (computerChoice === 3) {
      this.human.scissorsScore += 20;
      this.human.alienScore += 20;
      this.human.wimpyAlienScore += 20;
      this.human.paperScore -= 20 ;
      this.human.biggerAlienScore -= 20;
      this.human.rockScore -= 20;
      this.computerChoice = './assets/secret-alien.png';

    } else if (computerChoice === 4) {
      this.human.rockScore += 20;
      this.human.secretAlienScore += 20;
      this.human.wimpyAlienScore += 20;
      this.human.paperScore -= 20 ;
      this.human.alienScore -= 20;
      this.human.scissorsScore -= 20;
      this.computerChoice = './assets/bigger-alien.png';

    } else if (computerChoice === 5) {
      this.human.paperScore += 20;
      this.human.scissorsScore += 20;
      this.human.biggerAlienScore += 20;
      this.human.rockScore -= 20 ;
      this.human.wimpyAlienScore -= 20;
      this.human.secretAlienScore -= 20;
      this.computerChoice = './assets/alien.png';

    } else if (computerChoice === 6) {
      this.human.alienScore += 20;
      this.human.rockScore += 20;
      this.human.paperScore += 20;
      this.human.biggerAlienScore -= 20 ;
      this.human.scissorsScore -= 20;
      this.human.secretAlienScore -= 20;
      this.computerChoice = './assets/wimpy-alien.png';
    }
  }

  logWinner(humanScore, computerScore, parsedWinCountHuman, parsedWinCountComputer) {
    if (humanScore > computerScore) {
      this.winner = this.human.name;
      parsedWinCountHuman += 1;
      updateHumanWinCount(parsedWinCountHuman)
      this.human.saveHumanWinToStorage(parsedWinCountHuman);

    } else if (humanScore < computerScore) {
      this.winner = this.computer.name;
      parsedWinCountComputer += 1;
      updateComputerWinCount(parsedWinCountComputer)
      this.computer.saveComputerWinToStorage(parsedWinCountComputer);

    } else {
      this.winner = 'NOBUDDY';
    }
  }

  playerChoice(humanChoice, paperButton, rockButton, scissorsButton) {
    if (humanChoice === paperButton) {
      this.humanScore = this.human.paperScore;
      this.humanChoice = './assets/paypear.png';

    } else if (humanChoice  === rockButton) {
      this.humanScore = this.human.rockScore;
      this.humanChoice = './assets/rock.png';

    } else if (humanChoice  === scissorsButton) {
      this.humanScore = this.human.scissorsScore;
      this.humanChoice= './assets/scissors-romero.png';
    }
  }

  playerFairChoice(humanChoice) {
    if (humanChoice === 'game-board-fair__paper-button') {
      this.humanScore = this.human.paperScore;
      this.humanChoice = './assets/paypear.png';

    } else if (humanChoice  === 'game-board-fair__rock-button') {
      this.humanScore = this.human.rockScore;
      this.humanChoice = './assets/rock.png';

    } else if (humanChoice  === 'game-board-fair__scissors-button') {
      this.humanScore = this.human.scissorsScore;
      this.humanChoice = './assets/scissors-romero.png';

    } else if (humanChoice  === 'game-board-fair__wimpy-alien-button') {
      this.humanScore = this.human.wimpyAlienScore;
      this.humanChoice = './assets/wimpy-alien.png';

    } else if (humanChoice === 'game-board-fair__alien-button') {
      this.humanScore = this.human.alienScore;
      this.humanChoice = './assets/alien.png';

    } else if (humanChoice  === 'game-board-fair__bigger-alien-button') {
      this.humanScore = this.human.biggerAlienScore;
      this.humanChoice = './assets/bigger-alien.png';

    } else if (humanChoice  === 'game-board-fair__secret-alien-button') {
      this.humanScore = this.human.secretAlienScore;
      this.humanChoice = './assets/secret-alien.png';
    }
  }
};
