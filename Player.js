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
};
