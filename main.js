var startClassicGame = document.querySelector('.game-board__classic-game-btn')
var newGame = new Game()
var player = new Player()
var gameMethod = newGame.determineWinner()

startClassicGame.addEventListener('click', gameInPlay)

function gameInPlay() {
  event.preventDefault()
  newGame.determineWinner();

  newGame.determineClassicScores(newGame.determineComputerChoice(['paper', 'rock', 'scissors']), newGame.human);

  newGame.playerChoice(newGame.human);
  console.log(newGame.determineComputerChoice(['paper', 'rock', 'scissors']));

  newGame.logWinner(newGame.humanScore, newGame.human.score)
}

function changeViewToOutcome() {

}

function displayWinner() {

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

function changeViewToClassic() {

}
