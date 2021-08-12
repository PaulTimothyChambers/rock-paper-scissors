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

  classicGameInPlayNow(newGame, human, computer) {
    newGame.human = human;
    newGame.computer = computer;

    hideElement(changeGameMode);

    newGame.determineClassicScores(newGame.determineComputerChoice(['paper', 'rock', 'scissors']), newGame.human);

    var humanChoice = event.target.className;
    newGame.playerChoice(humanChoice, 'game-board-classic__paper-button', 'game-board-classic__rock-button', 'game-board-classic__scissors-button');

    newGame.logWinner(newGame.humanScore, computer.score, human.retrieveHumanWins(), computer.retrieveComputerWins());

    displayClassicWinner();
    displayClassicPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);

    setTimeout(changeViewToClassic, 2500);
    setTimeout(showGameChangeButton, 2500);
  }

  difficultGameInPlayNow(newGame, human, computer) {
    newGame.human = human;
    newGame.computer = computer;

    newGame.determineComputerWins();

    var humanChoice = event.target.className;
    newGame.playerChoice(humanChoice, 'game-board-difficult__paper-button', 'game-board-difficult__rock-button', 'game-board-difficult__scissors-button');

    newGame.computerWins(human.retrieveHumanWins(), computer.retrieveComputerWins());

    displayDifficultWinner();
    displayDifficultPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);

    setTimeout(displayHelpfulMessage, 25);
    setTimeout(displayHelpfulMessageTwo, 45);
    setTimeout(displayHelpfulMessageThree, 140);
    setTimeout(displayHelpfulMessageFour, 200);
    setTimeout(displayHelpfulMessageFive, 250);
    setTimeout(changeViewToDifficultTwo, 350);
  }

  difficultGameInPlayTwoNow(newGame, human, computer) {
    newGame.human = human;
    newGame.computer = computer;

    newGame.determineComputerWins();

    var humanChoice = event.target.className;
    newGame.playerChoice(humanChoice, 'game-board-difficult__paper-button-two', 'game-board-difficult__rock-button-two', 'game-board-difficult__scissors-button-two');

    newGame.computerWins(human.retrieveHumanWins(), computer.retrieveComputerWins());

    displayDifficultWinner();
    displayDifficultPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);

    setTimeout(changeViewToDifficultTwo, 28);
    setTimeout(showPlayFairlyButton, 208);
  }

  fairGameInPlayNow(newGame, human, computer) {
    newGame.human = human;
    newGame.computer = computer;

    newGame.determineDifficultScores(newGame.determineComputerChoice(['paper', 'rock', 'scissors', 'secret alien', 'bigger alien', 'alien', 'wimpy alien']));

    var humanChoice = event.target.className;

    newGame.playerFairChoice(humanChoice);

    newGame.logWinner(newGame.humanScore, newGame.computer.score, human.retrieveHumanWins(), computer.retrieveComputerWins());

    displayFairWinner();
    displayFairPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);

    setTimeout(changeViewToFairTwo, 25);
    setTimeout(showGameChangeButtonAlt, 25);
  }
};
