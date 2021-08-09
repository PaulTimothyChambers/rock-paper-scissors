class Player {
  constructor(name) {
    this.name = name;
    this.paperScore = 20;
    this.rockScore = 20;
    this.scissorsScore = 20;
    this.score = 20;
    this.winCount = 0;
  }

  saveHumanWinToStorage(humanCount) {
    localStorage.setItem('newHumanWinCount', JSON.stringify(humanCount));
  }

  saveComputerWinToStorage(computerCount) {
    localStorage.setItem('newComputerWinCount', JSON.stringify(computerCount));
  }

  retrieveHumanWins() {
    var retrievedHumanWins = localStorage.getItem('newHumanWinCount');
    var parsedHumanWinCount = JSON.parse(retrievedHumanWins);
    return parsedHumanWinCount;
  }

  retrieveComputerWins() {
    var retrievedComputerWins = localStorage.getItem('newComputerWinCount');
    var parsedComputerWinCount = JSON.parse(retrievedComputerWins);
    return parsedComputerWinCount;
  }

  // takeTurn() {
  //
  // }
};
