class Game {
  constructor() {
    this.human = '';
    this.computer = '';
    this.humanScore = '';
    this.humanChoice = '';
    this.computerChoice = '';
    this.winner = '';
  }

  determineClassicScores(computerChoice, human) {
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

  logClassicWinner(humanScore, computerScore, parsedWinCountHuman, parsedWinCountComputer) {
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

  playerChoice(humanChoice) {
    if (humanChoice === 'game-board-classic__paper-button') {
      this.humanScore = this.human.paperScore;
      this.humanChoice = './assets/paypear.png';

    } else if (humanChoice === 'game-board-classic__rock-button') {
      this.humanScore = this.human.rockScore;
      this.humanChoice = './assets/rock.png';


    } else if (humanChoice === 'game-board-classic__scissors-button') {
      this.humanScore = this.human.scissorsScore;
      this.humanChoice= './assets/scissors-romero.png';
    }
  }

  determineComputerChoice(array) {
    return Math.floor(Math.random() * array.length);
  }
};
