// QUERY SELECTORS ************************************
// clickable elements
var classicChoice = document.querySelectorAll('#classicChoice');
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
var rockChoiceFair = document.querySelector('.game-board-fair__rock-button');
var paperChoiceFair = document.querySelector('.game-board-fair__paper-button');
var scissorsChoiceFair = document.querySelector('.game-board-fair__scissors-button');
var alienChoiceFair = document.querySelector('.game-board-fair__alien-button');
var biggerAlienChoiceFair = document.querySelector('.game-board-fair__bigger-alien-button');
var wimpyAlienChoiceFair = document.querySelector('.game-board-fair__wimpy-alien-button');
var fairGameRulePaper = document.querySelector('.fair-game-rules__paper');
var fairGameRuleRock = document.querySelector('.fair-game-rules__rock');
var fairGameRuleScissors = document.querySelector('.fair-game-rules__scissors');
var fairGameRuleSecretAlien = document.querySelector('.fair-game-rules__secret-alien');
var fairGameRuleBiggerAlien = document.querySelector('.fair-game-rules__bigger-alien');
var fairGameRuleAlien = document.querySelector('.fair-game-rules__alien');
var fairGameRuleWimpyAlien = document.querySelector('.fair-game-rules__wimpy-alien');
// div elements and texts
var ciaWarning = document.querySelector('.cia-warning');
var topBorder = document.querySelector('.top-border');
var mainCard = document.querySelector('.game-board');
var bottomBorder = document.querySelector('.bottom-border');
var mainCardTwo = document.querySelector('.game-board-two');
var noTouchy = document.querySelector('.game-board-difficult__no-touchy');
var classicGameCard = document.querySelector('.game-board-classic');
var divClassicCard = document.querySelector('.classic-card');
var divclassicCardTwo = document.querySelector('.classic-card-two');
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
var clickHereText = document.querySelector('.game-board__click-here');
var clickHereTextTwo = document.querySelector('.game-board__click-here-two');
var chooseModeText = document.querySelector('.game-board__choose-mode');
var ciaNoteOne = document.querySelector('#noteOne');
var ciaNoteTwo = document.querySelector('#noteTwo');
var ciaNoteThree = document.querySelector('#noteThree');
var watermarkOne = document.querySelector('#watermarkOne');
var watermarkTwo = document.querySelector('#watermarkTwo');
// buttons
var playFairly = document.querySelector('.bottom-border__play-fairly');
var btnCiaProceed = document.querySelector('.cia-warning__proceed-button');
var changeGameMode = document.querySelector('.bottom-border__change-mode-button');
var changeItBack = document.querySelector('.top-border__change-mode-back');
// game mode buttons
var startClassicGame = document.querySelector('.game-board__classic-game-button');
var startClassicGameTwo = document.querySelector('.game-board__classic-game-button-two');
var startDifficultGame = document.querySelectorAll('#startDifficultGame');
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
for (var i=0;i<startDifficultGame.length;i++) {
  startDifficultGame[i].addEventListener('click', changeViewToDifficult);
};
for (var i=0;i<classicChoice.length;i++) {
  classicChoice[i].addEventListener('click', classicGameInPlay);
};
startDifficultGameAlt.addEventListener('click', changeViewToFairTwo);
alsoStartDifficultGameAlt.addEventListener('click', changeViewToFairTwo);
alsoStartDifficultGameTwoAlt.addEventListener('click', changeViewToFairTwo);
alsoStartDifficultGameThreeAlt.addEventListener('click', changeViewToFairTwo);
alsoStartDifficultGameFourAlt.addEventListener('click', changeViewToFairTwo);
playFairly.addEventListener('click', changeViewToFair);
// rockChoice.addEventListener('click', classicGameInPlay);
// paperChoice.addEventListener('click', classicGameInPlay);
// scissorsChoice.addEventListener('click', classicGameInPlay);
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
fairGameRulePaper.addEventListener('click', fairGameInPlay);
fairGameRuleRock.addEventListener('click', fairGameInPlay);
fairGameRuleScissors.addEventListener('click', fairGameInPlay);
fairGameRuleSecretAlien.addEventListener('click', fairGameInPlay);
fairGameRuleBiggerAlien.addEventListener('click', fairGameInPlay);
fairGameRuleAlien.addEventListener('click', fairGameInPlay);
fairGameRuleWimpyAlien.addEventListener('click', fairGameInPlay);

// GLOBALS ************************************
var newGame = new Game();

retrieveWinsOnLoad();

// FUNCTIONS: match instantiations ************************************
function classicGameInPlay() {
  event.preventDefault();

  newGame.human.classicGameInPlayNow(newGame, newGame.human, newGame.computer);
};

function difficultGameInPlay() {
  event.preventDefault();

  hideElement(watermarkOne);
  hideElement(watermarkTwo);

  newGame.human.difficultGameInPlayNow(newGame, newGame.human, newGame.computer);
};

function difficultGameInPlayTwo() {
  event.preventDefault();

  hideElement(playFairly);
  hideElement(watermarkOne);
  hideElement(watermarkTwo);

  newGame.human.difficultGameInPlayTwoNow(newGame, newGame.human, newGame.computer);
};

function fairGameInPlay() {
  event.preventDefault();

  hideElement(watermarkOne);
  hideElement(watermarkTwo);

  newGame.human.fairGameInPlayNow(newGame, newGame.human, newGame.computer);
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

  showElement(watermarkOne);
  showElement(watermarkTwo);
  showElement(ciaNoteOne);
  showElement(ciaNoteTwo);
  showElement(ciaNoteThree);
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

  showElement(watermarkOne);
  showElement(watermarkTwo);
  showElement(ciaNoteOne);
  showElement(ciaNoteTwo);
  showElement(ciaNoteThree);
  showElement(topBorder);
  showElement(bottomBorder);
  showElement(mainCardTwo);
};

function changeViewToClassic() {
  hideElement(ciaNoteOne);
  hideElement(ciaNoteTwo);
  hideElement(ciaNoteThree);
  hideElement(mainCard);
  hideElement(classicWinnerCard);
  hideElement(stopThat);
  hideElement(stopThatTwo);
  hideElement(stopThatThree);
  hideElement(stopThatFour);
  hideElement(watermarkOne);
  hideElement(watermarkTwo);

  showElement(classicGameCard);
  showElement(classicCard);
};

function changeViewToDifficult() {
  hideElement(ciaNoteOne);
  hideElement(ciaNoteTwo);
  hideElement(ciaNoteThree);
  hideElement(mainCard);
  hideElement(difficultWinnerCard);
  hideElement(stopThat);
  hideElement(stopThatTwo);
  hideElement(stopThatThree);
  hideElement(stopThatFour);
  hideElement(helpfulMessageFive);
  hideElement(watermarkOne);
  hideElement(watermarkTwo);

  showElement(difficultGameCard);
  showElement(difficultCard);
};

function changeViewToDifficultTwo() {
  hideElement(ciaNoteOne);
  hideElement(ciaNoteTwo);
  hideElement(ciaNoteThree);
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
  hideElement(watermarkOne);
  hideElement(watermarkTwo);

  showElement(difficultGameCard);
  showElement(difficultCard);
  showElement(rockChoiceDifficultTwo);
  showElement(paperChoiceDifficultTwo);
  showElement(scissorsChoiceDifficultTwo);
};

function changeViewToFair() {
  changeStyling(playFairly, 'bottom-border__play-fairly', 'bottom-border__play-fairly-two');
  hideElement(ciaNoteOne);
  hideElement(ciaNoteTwo);
  hideElement(ciaNoteThree);
  hideElement(mainCard);
  hideElement(fairWinnerCard);
  hideElement(difficultCard);
  hideElement(difficultGameCard);
  hideElement(noTouchy);
  hideElement(playFairly);
  hideElement(watermarkOne);
  hideElement(watermarkTwo);

  showElement(fairGameCard);
  showElement(fairCard);
  showElement(stopThat);
  showElement(stopThatTwo);
  showElement(stopThatThree);
  showElement(stopThatFour);
};

function changeViewToFairTwo() {
  hideElement(ciaNoteOne);
  hideElement(ciaNoteTwo);
  hideElement(ciaNoteThree);
  hideElement(mainCard);
  hideElement(mainCardTwo);
  hideElement(fairWinnerCard);
  hideElement(difficultCard);
  hideElement(difficultGameCard);
  hideElement(noTouchy);
  hideElement(playFairly);
  hideElement(watermarkOne);
  hideElement(watermarkTwo);

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
};

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
function createPlayerOne() {
  var human = new Player('PYUNEE DUM HOOMOHN');
  return human
};

function createPlayerTwo() {
  var computer = new Player('POWREFUL BAUEUATIFUL ALEIN');
  return computer
};


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

function flashChooseModeText() {
  chooseModeText.classList.toggle('game-board__choose-mode-alt');
};

function flashClickHereText() {
  clickHereText.classList.toggle('game-board__click-here-alt');
  clickHereTextTwo.classList.toggle('game-board__click-here-two-alt')
};

function hideElement(element) {
  element.classList.add('hidden');
};

function showElement(element) {
  element.classList.remove('hidden');
};

// INTERVALS ************************************
setInterval(flashChooseModeText, 75);

setInterval(flashClickHereText, 95);

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
