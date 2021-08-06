var startClassicGame = document.querySelector('.game-board__classic-game-btn')
var newGame = new Game()
var gameMethod = newGame.determineWinner()

startClassicGame.addEventListener('click', gameInPlay) // <<<change this, don't forget

function gameInPlay() {
  event.preventDefault()
  newGame.determineWinner();

  newGame.determineClassicScores(newGame.determineComputerChoice(['paper', 'rock', 'scissors']), newGame.human);
  // console.log('computer choice (0=paper, 1=rock, 2=scissors)', newGame.determineComputerChoice)

  var humanChoice = event.target;

  newGame.playerChoice(humanChoice);

  newGame.logWinner(newGame.humanScore, newGame.human.score)

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
