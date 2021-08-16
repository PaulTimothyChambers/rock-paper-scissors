class Player {
  constructor(name) {
    this.name = name;
    this.paperScore = 20;
    this.rockScore = 20;
    this.scissorsScore = 20;
    this.score = 20;
    this.alienScore = 20;
    this.biggerAlienScore = 20;
    this.wimpyAlienScore = 20;
    this.secretAlienScore = 20;
    this.winCount = 0;
  }

  retrieveComputerWins() {
    var retrievedComputerWins = localStorage.getItem('newComputerWinCount');
    var parsedComputerWinCount = JSON.parse(retrievedComputerWins);
    return parsedComputerWinCount;
  }

  retrieveHumanWins() {
    var retrievedHumanWins = localStorage.getItem('newHumanWinCount');
    var parsedHumanWinCount = JSON.parse(retrievedHumanWins);
    return parsedHumanWinCount;
  }

  saveComputerWinToStorage(computerCount) {
    localStorage.setItem('newComputerWinCount', JSON.stringify(computerCount));
  }

  saveHumanWinToStorage(humanCount) {
    localStorage.setItem('newHumanWinCount', JSON.stringify(humanCount));
  }

  classicGameInPlayNow(newGame, human, computer, humanChoice) {
    var humanChoice = event.target.className;
    hideElement(changeGameMode);
    newGame.determineClassicScores(newGame.determineComputerChoice(['paper', 'rock', 'scissors']), newGame.human);
    newGame.playerChoice(humanChoice, 'game-board-classic__paper-button', 'game-board-classic__rock-button', 'game-board-classic__scissors-button');
    newGame.logWinner(newGame.humanScore, computer.score, human.retrieveHumanWins(), computer.retrieveComputerWins());
    displayClassicWinner();
    displayClassicPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);

    setTimeout(changeViewToClassic, 2500);
    setTimeout(showGameChangeButton, 2500);
  }

  difficultGameInPlayNow(newGame, human, computer, humanChoice) {
    var humanChoice = event.target.className;
    hideElement(watermarkOne);
    hideElement(watermarkTwo);
    newGame.determineComputerWins();
    newGame.playerChoice(humanChoice, 'game-board-difficult__paper-button', 'game-board-difficult__rock-button', 'game-board-difficult__scissors-button');
    newGame.computerWins(human.retrieveHumanWins(), computer.retrieveComputerWins());
    displayDifficultWinner();
    displayDifficultPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);
    setTimeout(displayHelpfulMessage, 2500);
    setTimeout(displayHelpfulMessageTwo, 4500);
    setTimeout(displayHelpfulMessageThree, 14000);
    setTimeout(displayHelpfulMessageFour, 20000);
    setTimeout(displayHelpfulMessageFive, 25000);
    setTimeout(changeViewToDifficultTwo, 35000);
  }

  difficultGameInPlayTwoNow(newGame, human, computer, humanChoice) {
    var humanChoice = event.target.className;
    hideElement(playFairly);
    hideElement(watermarkOne);
    hideElement(watermarkTwo);
    newGame.determineComputerWins();
    newGame.playerChoice(humanChoice, 'game-board-difficult__paper-button-two', 'game-board-difficult__rock-button-two', 'game-board-difficult__scissors-button-two');
    newGame.computerWins(human.retrieveHumanWins(), computer.retrieveComputerWins());
    displayDifficultWinner();
    displayDifficultPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);

    setTimeout(changeViewToDifficultTwo, 2800);
    setTimeout(showPlayFairlyButton, 20800);
  }

  fairGameInPlayNow(newGame, human, computer, humanChoice) {
    var humanChoice = event.target.className;
    hideElement(watermarkOne);
    hideElement(watermarkTwo);
    newGame.determineDifficultScores(newGame.determineComputerChoice(['paper', 'rock', 'scissors', 'secret alien', 'bigger alien', 'alien', 'wimpy alien']));
    newGame.playerFairChoice(humanChoice);
    newGame.logWinner(newGame.humanScore, newGame.computer.score, human.retrieveHumanWins(), computer.retrieveComputerWins());
    displayFairWinner();
    displayFairPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);

    setTimeout(changeViewToFairTwo, 2500);
    setTimeout(showGameChangeButtonAlt, 2500);
  }
};
