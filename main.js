var rockChoice = document.querySelector('.game-board-classic__rock-button');
var paperChoice = document.querySelector('.game-board-classic__paper-button');
var scissorsChoice = document.querySelector('.game-board-classic__scissors-button');
var rockChoiceDifficult = document.querySelector('.game-board-difficult__rock-button');
var paperChoiceDifficult = document.querySelector('.game-board-difficult__paper-button');
var scissorsChoiceDifficult = document.querySelector('.game-board-difficult__scissors-button');
var alienChoiceDifficult = document.querySelector('.game-board-difficult__alien-button');
var biggerAlienChoiceDifficult = document.querySelector('.game-board-difficult__bigger-alien-button');
var wimpyAlienChoiceDifficult = document.querySelector('.game-board-difficult__wimpy-alien-button');
var secretAlienChoiceDifficult = document.querySelector('.top-border__secret-alien-image-two');

var topBorder = document.querySelector('.top-border');
var mainCard = document.querySelector('.game-board');
var bottomBorder = document.querySelector('.bottom-border');
var noTouchy = document.querySelector('.game-board-difficult__no-touchy');
var ciaWarning = document.querySelector('.cia-warning');
var classicGameCard = document.querySelector('.game-board-classic');
var difficultGameCard = document.querySelector('.game-board-difficult');
var fairGameCard = document.querySelector('.game-board-fair')
var classicCard = document.querySelector('#classicCard');
var difficultCard = document.querySelector('#difficultCard');
var fairCard = document.querySelector('#fairCard');
var classicWinnerCard = document.querySelector('#classicWinnerCard');
var difficultWinnerCard = document.querySelector('#difficultWinnerCard');
var classicGameOutcome = document.querySelector('.winner-card__display-winner');
var difficultGameOutcome = document.querySelector('.winner-card-difficult__display-winner');
var humanWinCount = document.querySelector('.bottom-border__player-win-count');
var computerWinCount = document.querySelector('.top-border__secret-alien-win-count');

var playFairly = document.querySelector('.bottom-border__play-fairly');
var btnCiaProceed = document.querySelector('.cia-warning__proceed-button');
var changeGameMode = document.querySelector('.bottom-border__change-mode-button');
var changeGameModeAlt = document.querySelector('.bottom-border__change-mode-alt-button')

var startClassicGame = document.querySelector('.game-board__classic-game-button');
var startDifficultGame = document.querySelector('.game-board__difficult-game-button');
var alsoStartDifficultGame = document.querySelector('.difficult-card__deco-button-one');
var alsoStartDifficultGameTwo = document.querySelector('.difficult-card__deco-button-two');
var alsoStartDifficultGameThree = document.querySelector('.difficult-card__deco-button-three');
var alsoStartDifficultGameFour = document.querySelector('.difficult-card__deco-button-four');

changeGameModeAlt.addEventListener('click', changeViewToMain);
changeGameMode.addEventListener('click', changeViewToMain);
btnCiaProceed.addEventListener('click', changeViewToMain);
alienChoiceDifficult.addEventListener('hover', dontTouchMyAliens);
biggerAlienChoiceDifficult.addEventListener('hover', dontTouchMyAliens);
wimpyAlienChoiceDifficult.addEventListener('hover', dontTouchMyAliens);
rockChoice.addEventListener('click', classicGameInPlay);
paperChoice.addEventListener('click', classicGameInPlay);
scissorsChoice.addEventListener('click', classicGameInPlay);
startClassicGame.addEventListener('click', changeViewToClassic);
startDifficultGame.addEventListener('click', changeViewToDifficult);
alsoStartDifficultGame.addEventListener('click', changeViewToDifficult);
alsoStartDifficultGameTwo.addEventListener('click', changeViewToDifficult);
alsoStartDifficultGameThree.addEventListener('click', changeViewToDifficult);
alsoStartDifficultGameFour.addEventListener('click', changeViewToDifficult);
playFairly.addEventListener('click', changeViewToFair);
rockChoiceDifficult.addEventListener('click', difficultGameInPlay);
paperChoiceDifficult.addEventListener('click', difficultGameInPlay);
scissorsChoiceDifficult.addEventListener('click', difficultGameInPlay);
alienChoiceDifficult.addEventListener('click', difficultGameInPlay);
biggerAlienChoiceDifficult.addEventListener('click', difficultGameInPlay);
wimpyAlienChoiceDifficult.addEventListener('click', difficultGameInPlay);

var newGame = new Game();

retrieveWinsOnLoad();

function classicGameInPlay() {
  event.preventDefault();

  var human = new Player('PYUNEE DUM HOOMOHN');
  var computer = new Player('POWREFUL BAUEUATIFUL ALEIN');

  newGame.human = human;
  newGame.computer = computer;

  hideElement(changeGameMode);

  newGame.determineClassicScores(newGame.determineComputerChoice(['paper', 'rock', 'scissors']), newGame.human);

  var humanChoice = event.target.className;
  newGame.playerChoice(humanChoice, 'game-board-classic__rock-button', 'game-board-classic__paper-button', 'game-board-classic__scissors-button');

  newGame.logWinner(newGame.humanScore, computer.score, human.retrieveHumanWins(), computer.retrieveComputerWins());

  displayClassicWinner();

  displayClassicPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);

  setTimeout(changeViewToClassic, 2500);
  setTimeout(showGameChangeButton, 2500);
};

function difficultGameInPlay() {
  event.preventDefault();

  var human = new Player('PYUNEE DUM HOOMOHN');
  var computer = new Player('POWREFUL BAUEUATIFUL ALEIN');

  newGame.human = human;
  newGame.computer = computer;

  newGame.determineDifficultScores(newGame.determineComputerChoice(['paper', 'rock', 'scissors', 'secret alien', 'bigger alien', 'alien', 'wimpy alien']), newGame.human);

  var humanChoice = event.target.className;
  newGame.playerChoice(humanChoice, 'game-board-difficult__rock-button', 'game-board-difficult__paper-button', 'game-board-difficult__scissors-button');

  newGame.logWinner(newGame.humanScore, newGame.computer.score, human.retrieveHumanWins(), computer.retrieveComputerWins());

  displayDifficultWinner();

  displayDifficultPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);

  setTimeout(changeViewToDifficult, 2500);
  setTimeout(showPlayFairlyButton, 2500);
};

function fairGameInPlay() {
  event.preventDefault();

  var human = new Player('PYUNEE DUM HOOMOHN');
  var computer = new Player('POWREFUL BAUEUATIFUL ALEIN');

  newGame.human = human;
  newGame.computer = computer;

  hideElement(showPlayFairlyButton);

  newGame.determineDifficultScores(newGame.determineComputerChoice(['paper', 'rock', 'scissors', 'secret alien', 'bigger alien', 'alien', 'wimpy alien']), newGame.human);

  var humanChoice = event.target.className;
  newGame.playerFairChoice(humanChoice);

  newGame.logWinner(newGame.humanScore, newGame.computer.score, human.retrieveHumanWins(), computer.retrieveComputerWins());

  displayFairWinner();

  displayFairPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);

  setTimeout(changeViewToFair, 2500);
  setTimeout(showGameChangeButtonAlt, 2500);
};

setInterval(flashChangeModeButton, 300);

function dontTouchMyAliens() {
  showElement(noTouchy);
};

function andDontComeBack() {
  hideElement(noTouchy);
};

function changeViewToMain() {
  hideElement(ciaWarning);

  hideElement(changeGameMode);

  hideElement(changeGameModeAlt);

  showElement(topBorder);

  showElement(bottomBorder);

  showElement(mainCard);

  hideElement(classicCard);

  hideElement(classicGameCard);

  hideElement(difficultCard);

  hideElement(difficultGameCard);

  hideElement(fairCard);

  hideElement(fairGameCard);

};

function changeViewToClassic() {
  hideElement(mainCard);

  hideElement(classicWinnerCard);

  showElement(classicGameCard);

  showElement(classicCard);
};

function changeViewToDifficult() {
  hideElement(mainCard);

  hideElement(difficultWinnerCard);

  showElement(difficultGameCard);

  showElement(difficultCard);
};

function changeViewToFair() {
  hideElement(mainCard);

  hideElement(fairWinnerCard);

  hideElement(difficultCard);

  hideElement(noTouchy);

  showElement(fairGameCard);

  showElement(fairCard);

  secretAlienChoiceDifficult.addEventListener('click', fairGameInPlay);
  secretAlienChoiceDifficult.classList.add('cursor');
};

function displayClassicWinner() {
  hideElement(classicCard);

  showElement(classicWinnerCard);
};

function displayDifficultWinner() {
  hideElement(difficultCard);

  showElement(difficultWinnerCard);
};

function displayFairWinner() {
  hideElement(fairCard);

  showElement(fairWinnerCard);
};

function displayClassicPlayerChoice(winner, humanChoice, computerChoice) {
  classicGameOutcome.innerHTML = '';
  if (winner === 'PYUNEE DUM HOOMOHN') {
    classicGameOutcome.innerHTML += `
      <div class="winner-card__chicken-dinner-human">${winner}
        <img class="winner-card__player-one-choice" src="${humanChoice}">
        <img class="winner-card__player-two-choice" src="${computerChoice}">
      </div>`;
  } else if (winner === 'POWREFUL BAUEUATIFUL ALEIN') {
    classicGameOutcome.innerHTML += `
      <div class="winner-card__chicken-dinner-computer">${winner}
        <img class="winner-card__player-one-choice" src="${humanChoice}">
        <img class="winner-card__player-two-choice" src="${computerChoice}">
      </div>`;
  } else {
    classicGameOutcome.innerHTML += `
      <div class="winner-card__chicken-dinner">${winner}
        <img class="winner-card__player-one-choice" src="${humanChoice}">
        <img class="winner-card__player-two-choice" src="${computerChoice}">
      </div>`;
  }
};

function displayDifficultPlayerChoice(winner, humanChoice, computerChoice) {
  difficultGameOutcome.innerHTML = '';
  if (winner === 'PYUNEE DUM HOOMOHN') {
    difficultGameOutcome.innerHTML += `
      <div class="winner-card-difficult__chicken-dinner-human">${winner}
        <img class="winner-card-difficult__player-one-choice" src="${humanChoice}">
        <img class="winner-card-difficult__player-two-choice" src="${computerChoice}">
      </div>`;
  } else if (winner === 'POWREFUL BAUEUATIFUL ALEIN') {
    difficultGameOutcome.innerHTML += `
      <div class="winner-card-difficult__chicken-dinner-computer">${winner}
        <img class="winner-card-difficult__player-one-choice" src="${humanChoice}">
        <img class="winner-card-difficult__player-two-choice" src="${computerChoice}">
      </div>`;
  } else {
    difficultGameOutcome.innerHTML += `
      <div class="winner-card-difficult__chicken-dinner">${winner}
        <img class="winner-card-difficult__player-one-choice" src="${humanChoice}">
        <img class="winner-card-difficult__player-two-choice" src="${computerChoice}">
      </div>`;
  }
};

function displayFairPlayerChoice(winner, humanChoice, computerChoice) {
  fairGameOutcome.innerHTML = '';
  if (winner === 'PYUNEE DUM HOOMOHN') {
    fairGameOutcome.innerHTML += `
      <div class="winner-card-fair__chicken-dinner-human">${winner}
        <img class="winner-card-fair__player-one-choice" src="${humanChoice}">
        <img class="winner-card-fair__player-two-choice" src="${computerChoice}">
      </div>`;
  } else if (winner === 'POWREFUL BAUEUATIFUL ALEIN') {
    fairGameOutcome.innerHTML += `
      <div class="winner-card-fair__chicken-dinner-computer">${winner}
        <img class="winner-card-fair__player-one-choice" src="${humanChoice}">
        <img class="winner-card-fair__player-two-choice" src="${computerChoice}">
      </div>`;
  } else {
    fairGameOutcome.innerHTML += `
      <div class="winner-card-fair__chicken-dinner">${winner}
        <img class="winner-card-fair__player-one-choice" src="${humanChoice}">
        <img class="winner-card-fair__player-two-choice" src="${computerChoice}">
      </div>`;
  }
};

function retrieveWinsOnLoad() {
  if (localStorage.length > 0) {
    var retrievedHumanWins = localStorage.getItem('newHumanWinCount');
    var parsedHumanWinCount = JSON.parse(retrievedHumanWins);

    updateHumanWinCount(parsedHumanWinCount);

    var retrievedComputerWins = localStorage.getItem('newComputerWinCount');
    var parsedComputerWinCount = JSON.parse(retrievedComputerWins);

    updateComputerWinCount(parsedComputerWinCount);
  }
};

function updateHumanWinCount(parsedHumanWinCount) {
  humanWinCount.innerText = `WiNZS: ${parsedHumanWinCount}`;
};

function updateComputerWinCount(parsedComputerWinCount) {
  computerWinCount.innerText = `WiNS: ${parsedComputerWinCount}`;
};

function showPlayFairlyButton() {

  showElement(playFairly);
};

function showGameChangeButton() {
  showElement(changeGameMode);
};

function showGameChangeButtonAlt() {
  showElement(changeGameModeAlt);
};

function flashChangeModeButton() {
  changeGameMode.classList.toggle('bottom-border__change-mode-button-alt');
};

function hideElement(element) {
  element.classList.add('hidden');
};

function showElement(element) {
  element.classList.remove('hidden');
};
