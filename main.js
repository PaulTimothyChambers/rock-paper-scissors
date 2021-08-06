var startClassicGame = document.querySelector('.game-board__classic-game-btn');
var btnClassicGame = document.querySelector('.game-board__classic-game-button');
var btnDifficultGame = document.querySelector('.game-board__difficult-game-button');
var rockChoice = document.querySelector('.classic-card__rock');
var paperChoice = document.querySelector('.classic-card__paper');
var scissorsChoice = document.querySelector('.classic-card__scissors');
var rockChoiceDifficult = document.querySelector('.difficult-card__rock');
var paperChoiceDifficult = document.querySelector('.difficult-card__paper');
var scissorsChoiceDifficult = document.querySelector('.difficult-card__scissors');
var alienChoiceDifficult = document.querySelector('.difficult-card__alien');
var biggerAlienChoiceDifficult = document.querySelector('.difficult-card__bigger-alien');
var wimpyAlienChoiceDifficult = document.querySelector('.difficult-card__wimpy-alien');
var changeGameMode = document.querySelector('.bottom-border__change-game-button')

changeGameMode.addEventListener('click', changeViewToMain);
rockChoice.addEventListener('click', gameInPlay); // <<<change this, don't forget
paperChoice.addEventListener('click', gameInPlay);
scissorsChoice.addEventListener('click', gameInPlay);
rockChoiceDifficult.addEventListener('click', gameInPlay);
paperChoiceDifficult.addEventListener('click', gameInPlay);
scissorsChoiceDifficult.addEventListener('click', gameInPlay);
alienChoiceDifficult.addEventListener('click', gameInPlay);
biggerAlienChoiceDifficult.addEventListener('click', gameInPlay);
wimpyAlienChoiceDifficult.addEventListener('click', gameInPlay);



function gameInPlay() {
  var newGame = new Game();
  event.preventDefault();
  newGame.determineWinner();

  newGame.determineClassicScores(newGame.determineComputerChoice(['paper', 'rock', 'scissors']), newGame.human);
  // console.log('computer choice (0=paper, 1=rock, 2=scissors)', newGame.determineComputerChoice)

  var humanChoice = event.target;

  newGame.playerChoice(humanChoice);

  newGame.logWinner(newGame.humanScore, newGame.human.score);

  // if (newGame.logWinner(newGame.humanScore, newGame.human.score) === 1) {
  //   newGame.computer.winCount += 1
  //   newGame.saveWinToStorage(newGame.human);
  //   displayWinner(newGame.human);
  //
  // } else if (newGame.logWinner(newGame.humanScore, newGame.human.score) === 2) {
  //   newGame.computer.winCount += 1
  //   newGame.saveWinToStorage(newGame.computer);
  //   displayWinner(newGame.computer);
  //
  // } else if (newGame.logWinner(newGame.humanScore, newGame.human.score) === 3) {}
  //   displayDraw();
  //   setTimeout(changeViewToClassic, 3000)
  //   setTimeout(showGameChangeButton, 3000)
  //   return
  // }
}

function changeViewToMain() {

}

function changeViewToClassic() {

}

function changeViewToOutcome() {

}

function displayWinner(winner) {

}

function displayDraw() {

}

function displayPlayerChoice() {

}

function displayComputerChoice()  {

}

function showWinCount() {

}

function showGameChangeButton() {

}
