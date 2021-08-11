# Rock-Paper-Scissors Solo Project

### (Turing School of Software and Design)

## Table of Contents

  - [Abstract](#abstract)
  - [Technologies](#technologies)
  - [Architecture](#architecture)
  - [Illustrations](#illustrations)
  - [Access to Project](#access-to-project)
  - [Contributors](#contributors)
	- [Wins](#wins)
	- [Challenges + Improvements](#challenges-+-improvements)
  - [Project Specs](#project-specs)


## Abstract

* Create a webpage that interactively plays "rock-paper-scisssors" with a user. User can select to play either "classic" mode (regular RPS) or a more "spicy" mode, where four new options are introduced alongside the classic three.


## Technologies

* Javascript
* HTML
* CSS
* Atom
* Brave Browser


## Architecture

* Player.js file containing a Player class. Methods include a way to:
__ ***retrieve the user's and computer's wins from local storage***
__ ***save the user's and computer's wins to local storage***
* Game.js file containing a Game class. Methods include a way to:
- ***force a computer-player win (for storyline purposes)***
- ***determine player scores for games played in classic/difficult/difficult-but-fair modes***
- ***determine the computer's choice of which "piece" to play***
- ***force computer to choose a certain piece (for storyline purposes)***
- ***determine the winner of each classic/difficult/difficult-but-fair game mode match and save this win to storage (through utilization of Player class methods)***
- ***determine which piece the player has chosen and pass that information on the main file for display within the DOM***
* main.js file for implementation of all Game.js and Player.js logic, and any/all manipulation of the DOM. Functions include a way to:
- ***control process flow of all logic within class files***
- ***set timeouts for automatic screen changing (where applicable/necessary)***
- ***hide, show, and manipulate any/all elements as needed***
- ***helper functions for hiding, showing, manipulating any/all elements as needed***
- ***display all relevant/required information dynamically on the DOM***
- ***retrieve any previously earned wins upon page load***
- ***update the DOM to reflect the number of wins for each player***
- ***"animate" certain portions of the DOM under certain conditions***

## Illustrations

![RPSImage](https://i.imgur.com/0jxW2XF.png)
![RPSImage](https://i.imgur.com/4cCG3G8.png)
![RPSImage](https://i.imgur.com/iZ17O8C.png)


## Access to Project

* [Click Here for Published Project](https://paultimothychambers.github/romcom/)


## Contributors

* [Paul Timothy Chambers](https://github.com/PaulTimothyChambers)


## Wins

* The ability to choose my own approach to the project allowed all that I've learned over the last five weeks to really sink in; this project was truly my "own", and ownership of it somehow cleared up everything that was still vague to me, as far as technical skills are concerned
* Had project essentially finished two-three days before due-date. This allowed me plenty of time to write the lore, which was necessary for the project to turn out almost exactly as I had envisioned
* Refactoring the project went smoothly, and was implemented effectively (as far as I am aware) each step of the way


## Challenges + Improvements

* I would've liked time to implement the classic game mode back in to the alternate "choose mode" screen
* I would like to increase my awareness/implementation of accessibility options within my code (which are sorely lacking in this project)


## Project Specs

* The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html)
