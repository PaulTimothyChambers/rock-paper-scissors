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

var btnCiaProceed = document.querySelector('.cia-warning__proceed-button');
var btnChangeGameMode = document.querySelector('.bottom-border__change-game-button');

var startClassicGame = document.querySelector('.game-board__classic-game-button');
var startDifficultGame = document.querySelector('.game-board__difficult-game-button');
var alsoStartDifficultGame = document.querySelector('.difficult-card__deco-button-one');
var alsoStartDifficultGameTwo = document.querySelector('.difficult-card__deco-button-two');
var alsoStartDifficultGameThree = document.querySelector('.difficult-card__deco-button-three');
var alsoStartDifficultGameFour = document.querySelector('.difficult-card__deco-button-four');

btnCiaProceed.addEventListener('click', changeViewToMain)
alienChoiceDifficult.addEventListener('hover', dontTouchMyAliens);
biggerAlienChoiceDifficult.addEventListener('hover', dontTouchMyAliens);
wimpyAlienChoiceDifficult.addEventListener('hover', dontTouchMyAliens);
rockChoice.addEventListener('click', classicGameInPlay);
paperChoice.addEventListener('click', classicGameInPlay);
paperChoiceTwo.addEventListener('click', classicGameInPlay);
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

function test() {
  console.log('this worked');
}

function classicGameInPlay() {
  var newGame = new Game();
  event.preventDefault();
  newGame.determineWinner();

  newGame.determineClassicScores(newGame.determineComputerChoice(['paper', 'rock', 'scissors']), newGame.human);
  // console.log('computer choice (0=paper, 1=rock, 2=scissors)', newGame.determineComputerChoice)

  var humanChoice = event.target.className
  newGame.playerChoice(humanChoice);

  newGame.logClassicWinner(newGame.humanScore, newGame.human.score);

  displayClassicWinner();

  displayPlayerChoice(newGame.winner, newGame.humanChoice, newGame.computerChoice);

  // displayComputerChoice(newGame.computerChoice);

  // setTimeout(changeViewToClassic, 3000)
  // setTimeout(showGameChangeButton, 3000)
}

function dontTouchMyAliens() {
  showElement(noTouchy);
}

function andDontComeBack() {
  hideElement(noTouchy);
}

function changeViewToMain() {
  hideElement(ciaWarning);

  showElement(topBorder);

  showElement(bottomBorder);

  showElement(mainCard);
}

function changeViewToClassic() {
  hideElement(mainCard);

  showElement(classicGameCard);
}

function changeViewToDifficult() {
  hideElement(mainCard);

  showElement(difficultGameCard);
}

function displayClassicWinner() {
  hideElement(classicCard)

  showElement(winnerCard);
}

function displayPlayerChoice(winner, humanChoice, computerChoice) {
  // if (humanChoice === {paperOne: './assets/pay.png', paperTwo: './assets/pear.png'}) {
  classicGameOutcome.innerHTML += `
    <div class="winner-card__chicken-dinner">${winner}
      <img class="winner-card__player-one-choice" src="${humanChoice}">
      <img class="winner-card__player-two-choice" src="${computerChoice}">
    </div>`
}
//   } else {
//     classicGameOutcome.innerHTML += `
//       <div class="winner-card__chicken-dinner">${winner}
//         <img class="winner-card__player-choice" src="${humanChoice}">`
//   }
// }
//
// function displayComputerChoice(computerChoice) {
//   if (computerChoice === {paperOne: './assets/pay.png', paperTwo: './assets/pear.png'}) {
//     classicGameOutcome.innerHTML += `
//         <img class="winner-card__computer-choice" src="${computerChoice.paperOne}">
//         <img class="winner-card__computer-choice" src="${computerChoice.paperTwo}">
//       </div>`
//   } else {
//     classicGameOutcome.innerHTML += `
//         <img class="winner-card__computer-choice" src="${computerChoice}">
//       </div>`
//   }
// }

function displayClassicDraw() {

}

function displayComputerChoice()  {

}

function showWinCount() {

}

function showGameChangeButton() {

}

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}
