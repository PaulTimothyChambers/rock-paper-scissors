var rockChoice = document.querySelector('.game-board-classic__rock-button');
var paperChoice = document.querySelector('.game-board-classic__paper-button');
var paperChoiceTwo = document.querySelector('.game-board-classic__paper-button-two');
var scissorsChoice = document.querySelector('.game-board-classic__scissors-button');
var rockChoiceDifficult = document.querySelector('.game-board-difficult__rock-button');
var paperChoiceDifficult = document.querySelector('.game-board-difficult__paper-button');
var paperChoiceDifficultTwo = document.querySelector('.game-board-difficult__paper-button-two');
var scissorsChoiceDifficult = document.querySelector('.game-board-difficult__scissors-button');
var alienChoiceDifficult = document.querySelector('.game-board-difficult__wimpy-alien-button');
var biggerAlienChoiceDifficult = document.querySelector('.game-board-difficult__alien-button');
var wimpyAlienChoiceDifficult = document.querySelector('.game-board-difficult__bigger-alien-button');

var topBorder = document.querySelector('.top-border');
var bottomBorder = document.querySelector('.bottom-border');
var mainCard = document.querySelector('.game-board');
var classicGameCard = document.querySelector('.game-board-classic');
var difficultGameCard = document.querySelector('.game-board-difficult');
var noTouchy = document.querySelector('.game-board-difficult__no-touchy');
var ciaWarning = document.querySelector('.cia-warning');
var classicCard = document.querySelector('#classicCard');
var winnerCard = document.querySelector('#winnerCard');
var classicGameOutcome = document.querySelector('.winner-card__display-winner');
var humanWinCount = document.querySelector('.bottom-border__player-win-count');
var computerWinCount = document.querySelector('.top-border__secret-alien-win-count');

var btnCiaProceed = document.querySelector('.cia-warning__proceed-button');
var btnChangeGameMode = document.querySelector('.bottom-border__change-game-button');

var startClassicGame = document.querySelector('.game-board__classic-game-button');
var startDifficultGame = document.querySelector('.game-board__difficult-game-button');
var alsoStartDifficultGame = document.querySelector('.difficult-card__deco-button-one');
var alsoStartDifficultGameTwo = document.querySelector('.difficult-card__deco-button-two');
var alsoStartDifficultGameThree = document.querySelector('.difficult-card__deco-button-three');
var alsoStartDifficultGameFour = document.querySelector('.difficult-card__deco-button-four');
var changeGameMode = document.querySelector('.bottom-border__change-mode-button');

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
// alienChoiceDifficult.addEventListener('click', dontTouchMyAliens);
// biggerAlienChoiceDifficult.addEventListener('click', dontTouchMyAliens);
// wimpyAlienChoiceDifficult.addEventListener('click', dontTouchMyAliens);
// rockChoiceDifficult.addEventListener('click', gameInPlay);
// paperChoiceDifficult.addEventListener('click', gameInPlay);
// scissorsChoiceDifficult.addEventListener('click', gameInPlay);
// alienChoiceDifficult.addEventListener('click', gameInPlay);
// biggerAlienChoiceDifficult.addEventListener('click', gameInPlay);
// wimpyAlienChoiceDifficult.addEventListener('click', gameInPlay);
var newGame = new Game();
// newGame.computer = computer;
retrieveWinsOnLoad();

function classicGameInPlay() {
  event.preventDefault();

  var human = new Player('PYUNEE DUM HOOMOHN');
  var computer = new Player('POWREFUL BAUEUATIFUL ALEIN');

  newGame.human = human;
  newGame.computer = computer;

  hideElement(changeGameMode);

  newGame.determineClassicScores(newGame.determineComputerChoice(['paper', 'rock', 'scissors']), human);

  var humanChoice = event.target.className;
  newGame.playerChoice(humanChoice);

  newGame.logClassicWinner(newGame.humanScore, computer.score, human.retrieveHumanWins(), computer.retrieveComputerWins());

  displayClassicWinner();

  displayPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);

  setTimeout(changeViewToClassic, 3000);
  setTimeout(showGameChangeButton, 3000);
};

setInterval(flashChangeModeButton, 350);

function dontTouchMyAliens() {
  showElement(noTouchy);
};

function andDontComeBack() {
  hideElement(noTouchy);
};

function changeViewToMain() {
  hideElement(ciaWarning);

  showElement(topBorder);

  showElement(bottomBorder);

  showElement(mainCard);

  hideElement(classicGameCard);

  hideElement(classicCard);

  hideElement(changeGameMode);

};

function changeViewToClassic() {
  hideElement(mainCard);

  hideElement(winnerCard);

  showElement(classicGameCard);

  showElement(classicCard);
};

function changeViewToDifficult() {
  hideElement(mainCard);

  showElement(difficultGameCard);
};

function displayClassicWinner() {
  hideElement(classicCard);

  showElement(winnerCard);
};

function displayPlayerChoice(winner, humanChoice, computerChoice) {
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

function showGameChangeButton() {
  showElement(changeGameMode);
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
