class Player {
  constructor() {
    this.paperScore = 20;
    this.rockScore = 20;
    this.scissorsScore = 20;
    this.score = 20;
    this.winCount = 0;
  }

  saveWinToStorage(player) {
    // localstorage set item (player, stringify-this)
  }

  retrieveWins() {
    // local storage .length   WON'T WORK PROBABLY: NEED THIS TO FUNCTION AS INSTANCE OF COMP, TOO
  }

  takeTurn() {

  }
}
