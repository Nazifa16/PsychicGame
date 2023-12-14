const descWins = document.querySelector("#descWins");
const descLoses = document.querySelector("#descLoses");
const descGuessesLeft = document.querySelector("#descGuessesLeft");
const descGuessesLetters = document.querySelector("#descGuessesLetters");
// -------------------------------------------------------------------------
class Psychic {
  wins = 0;
  loses = 0;
  guessLeft = 9;
  yourGuesses = [];

  letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  randomLetter() {
    const index = Math.floor(Math.random() * this.letters.length);
    const randomChoice = this.letters[index];
    return randomChoice;
  }

  resetGame() {
    this.guessLeft = 9;
    this.yourGuesses = [];
  }

  userChoiceFunc() {
    window.addEventListener("keypress", (e) => {
      const userChoice = e.key.toLowerCase();
      if (this.letters.includes(userChoice)) {
        this.yourGuesses.push(userChoice);
        const randomChoice = this.randomLetter();

        if (randomChoice === userChoice) {
          this.wins++;
          alert("You guessed correctly");
        } else {
          if (this.guessLeft > 0) {
            this.guessLeft--;
            // console.log("Incorrect guess. Guesses left: " + this.guessLeft);
          } else {
            this.loses++;
            this.resetGame();
          }
        }

        descWins.innerHTML = `Wins: ${this.wins}`;
        descLoses.innerHTML = `Loses: ${this.loses}`;
        descGuessesLeft.innerHTML = `Guesses Left: ${this.guessLeft}`;
        descGuessesLetters.innerHTML = `Your Guesses so far: ${this.yourGuesses.join(
          ", "
        )}`;

        // console.log("Wins: ", this.wins);
        // console.log("Loses: ", this.loses);
        // console.log("Guesses Left: ", this.guessLeft);
        // console.log("Your Guesses: ", this.yourGuesses);
      } else {
        alert("Your choice is not a letter, please choose a letter");
      }
    });
  }
}

const psychic = new Psychic();
console.log("Random Letter: ", psychic.randomLetter());
psychic.userChoiceFunc();
