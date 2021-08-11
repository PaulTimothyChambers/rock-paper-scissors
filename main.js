// QUERY SELECTORS ************************************
// clickable elements
var rockChoice = document.querySelector('.game-board-classic__rock-button');
var paperChoice = document.querySelector('.game-board-classic__paper-button');
var scissorsChoice = document.querySelector('.game-board-classic__scissors-button');
var rockChoiceDifficult = document.querySelector('.game-board-difficult__rock-button');
var rockChoiceDifficultTwo = document.querySelector('.game-board-difficult__rock-button-two');
var paperChoiceDifficult = document.querySelector('.game-board-difficult__paper-button');
var paperChoiceDifficultTwo = document.querySelector('.game-board-difficult__paper-button-two');
var scissorsChoiceDifficult = document.querySelector('.game-board-difficult__scissors-button');
var scissorsChoiceDifficultTwo = document.querySelector('.game-board-difficult__scissors-button-two');
var alienChoiceDifficult = document.querySelector('.game-board-difficult__alien-button');
var biggerAlienChoiceDifficult = document.querySelector('.game-board-difficult__bigger-alien-button');
var wimpyAlienChoiceDifficult = document.querySelector('.game-board-difficult__wimpy-alien-button');
var secretAlienChoiceFair = document.querySelector('.game-board-fair__secret-alien-button');
var notSeekritAleinTwo = document.querySelector('.top-border__secret-alien-image-two');
var rockChoiceFair = document.querySelector('.game-board-fair__rock-button');
var paperChoiceFair = document.querySelector('.game-board-fair__paper-button');
var scissorsChoiceFair = document.querySelector('.game-board-fair__scissors-button');
var alienChoiceFair = document.querySelector('.game-board-fair__alien-button');
var biggerAlienChoiceFair = document.querySelector('.game-board-fair__bigger-alien-button');
var wimpyAlienChoiceFair = document.querySelector('.game-board-fair__wimpy-alien-button');
// div elements and texts
var ciaWarning = document.querySelector('.cia-warning');
var topBorder = document.querySelector('.top-border');
var mainCard = document.querySelector('.game-board');
var bottomBorder = document.querySelector('.bottom-border');
var mainCardTwo = document.querySelector('.game-board-two');
var noTouchy = document.querySelector('.game-board-difficult__no-touchy');
var classicGameCard = document.querySelector('.game-board-classic');
var classicCard = document.querySelector('#classicCard');
var classicWinnerCard = document.querySelector('#classicWinnerCard');
var classicGameOutcome = document.querySelector('.winner-card__display-winner');
var difficultGameCard = document.querySelector('.game-board-difficult');
var difficultCard = document.querySelector('#difficultCard');
var difficultWinnerCard = document.querySelector('#difficultWinnerCard');
var difficultGameOutcome = document.querySelector('.winner-card-difficult__display-winner');
var fairGameCard = document.querySelector('.game-board-fair');
var fairGameCardTwo = document.querySelector('.game-board-fair-two');
var fairCard = document.querySelector('#fairCard');
var fairWinnerCard = document.querySelector('#fairWinnerCard');
var fairGameOutcome = document.querySelector('.winner-card-fair__display-winner');
var humanWinCount = document.querySelector('.bottom-border__player-win-count');
var computerWinCount = document.querySelector('.top-border__secret-alien-win-count');
var stopThat = document.querySelector('.stop-that');
var stopThatTwo = document.querySelector('.stop-that-two');
var stopThatThree = document.querySelector('.stop-that-three');
var stopThatFour = document.querySelector('.stop-that-four');
var helpfulMessageOne = document.querySelector('.helpful-message-one');
var helpfulMessageTwo = document.querySelector('.helpful-message-two');
var helpfulMessageThree = document.querySelector('.helpful-message-three');
var helpfulMessageFour = document.querySelector('.helpful-message-four');
var helpfulMessageFive = document.querySelector('.helpful-message-five');
var help = document.querySelector('.help');
// buttons
var playFairly = document.querySelector('.bottom-border__play-fairly');
var btnCiaProceed = document.querySelector('.cia-warning__proceed-button');
var changeGameMode = document.querySelector('.bottom-border__change-mode-button');
var changeItBack = document.querySelector('.top-border__change-mode-back');
// game mode buttons
var startClassicGame = document.querySelector('.game-board__classic-game-button');
var startDifficultGame = document.querySelector('.game-board__difficult-game-button');
var alsoStartDifficultGame = document.querySelector('.difficult-card__deco-button-one');
var alsoStartDifficultGameTwo = document.querySelector('.difficult-card__deco-button-two');
var alsoStartDifficultGameThree = document.querySelector('.difficult-card__deco-button-three');
var alsoStartDifficultGameFour = document.querySelector('.difficult-card__deco-button-four');
var startDifficultGameAlt = document.querySelector('.game-board__difficult-game-button-alt');
var alsoStartDifficultGameAlt = document.querySelector('.difficult-card__deco-button-one-alt');
var alsoStartDifficultGameTwoAlt = document.querySelector('.difficult-card__deco-button-two-alt');
var alsoStartDifficultGameThreeAlt = document.querySelector('.difficult-card__deco-button-three-alt');
var alsoStartDifficultGameFourAlt = document.querySelector('.difficult-card__deco-button-four-alt');

// EVENT LISTENERS ************************************
alienChoiceDifficult.addEventListener('hover', dontTouchMyAliens);
biggerAlienChoiceDifficult.addEventListener('hover', dontTouchMyAliens);
wimpyAlienChoiceDifficult.addEventListener('hover', dontTouchMyAliens);
changeItBack.addEventListener('click', changeViewToMainTwo);
changeGameMode.addEventListener('click', changeViewToMain);
btnCiaProceed.addEventListener('click', changeViewToMain);
startClassicGame.addEventListener('click', changeViewToClassic);
startDifficultGame.addEventListener('click', changeViewToDifficult);
alsoStartDifficultGame.addEventListener('click', changeViewToDifficult);
alsoStartDifficultGameTwo.addEventListener('click', changeViewToDifficult);
alsoStartDifficultGameThree.addEventListener('click', changeViewToDifficult);
alsoStartDifficultGameFour.addEventListener('click', changeViewToDifficult);
startDifficultGameAlt.addEventListener('click', changeViewToFairTwo);
alsoStartDifficultGameAlt.addEventListener('click', changeViewToFairTwo);
alsoStartDifficultGameTwoAlt.addEventListener('click', changeViewToFairTwo);
alsoStartDifficultGameThreeAlt.addEventListener('click', changeViewToFairTwo);
alsoStartDifficultGameFourAlt.addEventListener('click', changeViewToFairTwo);
playFairly.addEventListener('click', changeViewToFair);
rockChoice.addEventListener('click', classicGameInPlay);
paperChoice.addEventListener('click', classicGameInPlay);
scissorsChoice.addEventListener('click', classicGameInPlay);
rockChoiceDifficult.addEventListener('click', difficultGameInPlay);
rockChoiceDifficultTwo.addEventListener('click', difficultGameInPlayTwo);
paperChoiceDifficult.addEventListener('click', difficultGameInPlay);
paperChoiceDifficultTwo.addEventListener('click', difficultGameInPlayTwo);
scissorsChoiceDifficult.addEventListener('click', difficultGameInPlay);
scissorsChoiceDifficultTwo.addEventListener('click', difficultGameInPlayTwo);
alienChoiceDifficult.addEventListener('click', difficultGameInPlay);
biggerAlienChoiceDifficult.addEventListener('click', difficultGameInPlay);
wimpyAlienChoiceDifficult.addEventListener('click', difficultGameInPlay);
rockChoiceFair.addEventListener('click', fairGameInPlay);
paperChoiceFair.addEventListener('click', fairGameInPlay);
scissorsChoiceFair.addEventListener('click', fairGameInPlay);
alienChoiceFair.addEventListener('click', fairGameInPlay);
biggerAlienChoiceFair.addEventListener('click', fairGameInPlay);
wimpyAlienChoiceFair.addEventListener('click', fairGameInPlay);
secretAlienChoiceFair.addEventListener('click', fairGameInPlay);

// GLOBALS ************************************
var newGame = new Game();

retrieveWinsOnLoad();

// FUNCTIONS: match instantiations ************************************
function classicGameInPlay() {
  event.preventDefault();

  var human = new Player('PYUNEE DUM HOOMOHN');
  var computer = new Player('POWREFUL BAUEUATIFUL ALEIN');

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
};

function difficultGameInPlay() {
  event.preventDefault();

  var human = new Player('PYUNEE DUM HOOMOHN');
  var computer = new Player('POWREFUL BAUEUATIFUL ALEIN');

  newGame.human = human;
  newGame.computer = computer;

  newGame.determineComputerWins();

  var humanChoice = event.target.className;
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
};

function difficultGameInPlayTwo() {
  event.preventDefault();

  hideElement(playFairly);

  var human = new Player('PYUNEE DUM HOOMOHN');
  var computer = new Player('POWREFUL BAUEUATIFUL ALEIN');

  newGame.human = human;
  newGame.computer = computer;

  newGame.determineComputerWins();

  var humanChoice = event.target.className;
  newGame.playerChoice(humanChoice, 'game-board-difficult__paper-button-two', 'game-board-difficult__rock-button-two', 'game-board-difficult__scissors-button-two');

  newGame.computerWins(human.retrieveHumanWins(), computer.retrieveComputerWins());

  displayDifficultWinner();
  displayDifficultPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);

  setTimeout(changeViewToDifficultTwo, 2800);
  setTimeout(showPlayFairlyButton, 20800);
};

function fairGameInPlay() {
  event.preventDefault();

  var human = new Player('PYUNEE DUM HOOMOHN');
  var computer = new Player('POWREFUL BAUEUATIFUL ALEIN');

  newGame.human = human;
  newGame.computer = computer;

  setInterval(hideElementPlayFairly, 1);

  newGame.determineDifficultScores(newGame.determineComputerChoice(['paper', 'rock', 'scissors', 'secret alien', 'bigger alien', 'alien', 'wimpy alien']));

  var humanChoice = event.target.className;

  newGame.playerFairChoice(humanChoice);

  newGame.logWinner(newGame.humanScore, newGame.computer.score, human.retrieveHumanWins(), computer.retrieveComputerWins());

  displayFairWinner();
  displayFairPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);

  setTimeout(changeViewToFairTwo, 2500);
  setTimeout(showGameChangeButtonAlt, 2500);
};

// FUNCTIONS: view changes ************************************
function dontTouchMyAliens() {
  showElement(noTouchy);
};

function andDontComeBack() {
  hideElement(noTouchy);
};

function changeViewToMain() {
  hideElement(ciaWarning);
  hideElement(changeGameMode);
  hideElement(changeItBack);
  hideElement(classicCard);
  hideElement(classicGameCard);
  hideElement(difficultCard);
  hideElement(difficultGameCard);
  hideElement(fairCard);
  hideElement(fairGameCard);
  hideElement(stopThat);
  hideElement(stopThatTwo);
  hideElement(stopThatThree);
  hideElement(stopThatFour);

  showElement(topBorder);
  showElement(bottomBorder);
  showElement(mainCard);
};

function changeViewToMainTwo() {
  hideElement(changeGameMode);
  hideElement(changeItBack);
  hideElement(classicCard);
  hideElement(classicGameCard);
  hideElement(difficultCard);
  hideElement(difficultGameCard);
  hideElement(fairCard);
  hideElement(fairGameCard);
  hideElement(stopThat);
  hideElement(stopThatTwo);
  hideElement(stopThatThree);
  hideElement(stopThatFour);

  showElement(topBorder);
  showElement(bottomBorder);
  showElement(mainCardTwo);
};

function changeViewToClassic() {
  hideElement(mainCard);
  hideElement(classicWinnerCard);
  hideElement(stopThat);
  hideElement(stopThatTwo);
  hideElement(stopThatThree);
  hideElement(stopThatFour);

  showElement(classicGameCard);
  showElement(classicCard);
};

function changeViewToDifficult() {
  hideElement(mainCard);
  hideElement(difficultWinnerCard);
  hideElement(stopThat);
  hideElement(stopThatTwo);
  hideElement(stopThatThree);
  hideElement(stopThatFour);
  hideElement(helpfulMessageFive);

  showElement(difficultGameCard);
  showElement(difficultCard);
};

function changeViewToDifficultTwo() {
  hideElement(rockChoiceDifficult);
  hideElement(paperChoiceDifficult);
  hideElement(scissorsChoiceDifficult);
  hideElement(mainCard);
  hideElement(difficultWinnerCard);
  hideElement(stopThat);
  hideElement(stopThatTwo);
  hideElement(stopThatThree);
  hideElement(stopThatFour);
  hideElement(helpfulMessageFive);

  showElement(difficultGameCard);
  showElement(difficultCard);
  showElement(rockChoiceDifficultTwo);
  showElement(paperChoiceDifficultTwo);
  showElement(scissorsChoiceDifficultTwo);
};

function changeViewToFair() {
  hideElement(mainCard);
  hideElement(fairWinnerCard);
  hideElement(difficultCard);
  hideElement(difficultGameCard);
  hideElement(noTouchy);
  hideElement(playFairly);

  showElement(fairGameCard);
  showElement(fairCard);
  showElement(stopThat);
  showElement(stopThatTwo);
  showElement(stopThatThree);
  showElement(stopThatFour);
};

function changeViewToFairTwo() {
  hideElement(mainCard);
  hideElement(mainCardTwo);
  hideElement(fairWinnerCard);
  hideElement(difficultCard);
  hideElement(difficultGameCard);
  hideElement(noTouchy);
  hideElement(playFairly);

  showElement(fairGameCard);
  showElement(fairCard);
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
  hideElement(changeItBack);
  hideElement(stopThat);
  hideElement(stopThatTwo);
  hideElement(stopThatThree);
  hideElement(stopThatFour);
  hideElement(fairCard);
  hideElement(playFairly);

  showElement(fairWinnerCard);
};

function displayHelpfulMessage() {
  hideElement(mainCard);
  hideElement(fairWinnerCard);
  hideElement(difficultCard);
  hideElement(difficultWinnerCard);
  hideElement(noTouchy);

  showElement(help);
  showElement(helpfulMessageOne);
};

function displayHelpfulMessageTwo() {
  hideElement(helpfulMessageOne);
  showElement(helpfulMessageTwo);
};

function displayHelpfulMessageThree() {
  hideElement(helpfulMessageTwo);
  showElement(helpfulMessageThree);
};

function displayHelpfulMessageFour() {
  hideElement(helpfulMessageThree);
  showElement(helpfulMessageFour);
};

function displayHelpfulMessageFive() {
  hideElement(helpfulMessageFour);
  showElement(helpfulMessageFive);
};

function showPlayFairlyButton() {
  showElement(playFairly);
};

function showGameChangeButton() {
  showElement(changeGameMode);
};

function showGameChangeButtonAlt() {
  showElement(changeItBack);
};

function hideElementPlayFairly() {
  hideElement(playFairly);
}

// FUNCTIONS: dynamic HTML ************************************
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
  difficultGameOutcome.innerHTML += `
    <div class="winner-card-difficult__chicken-dinner-computer">${winner}
      <img class="winner-card-difficult__player-one-choice" src="${humanChoice}">
      <img class="winner-card-difficult__player-two-choice" src="${computerChoice}">
      <img class="game-board-difficult__wimpy-alien-button-alt" src="./assets/wimpy-alien.png">
      <img class="game-board-difficult__alien-button-alt" src="./assets/alien.png">
      <img class="game-board-difficult__bigger-alien-button-alt" src="./assets/bigger-alien.png">
    </div>`;
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

// FUNCTIONS: local storage ************************************
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

// FUNCTIONS: misc. ************************************
function changeStyling(element, styleOne, styleTwo) {
  element.classList.remove(styleOne);
  element.classList.add(styleTwo);
};

function flashStopThat(element, newStyle) {
  element.classList.toggle(newStyle);
};

function flashChangeModeButtonAlt() {
  changeItBack.classList.toggle('top-border__change-mode-back-alt');
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

// INTERVALS ************************************
setInterval(flashChangeModeButtonAlt, 90);

setInterval(flashChangeModeButton, 300);

setInterval(function() {
  flashStopThat(stopThat, 'stop-that-alt')
}, 50);

setInterval(function() {
  flashStopThat(stopThatTwo, 'stop-that-two-alt')
}, 80);

setInterval(function() {
  flashStopThat(stopThatThree, 'stop-that-three-alt')
}, 70);

setInterval(function() {
  flashStopThat(stopThatFour, 'stop-that-four-alt')
}, 120);
