// Initialize the human player's score
let humanScore = 0;

// Initialize the computer player's score
let computerScore = 0;

// Array of possible choices in the game
const choices = ["rock", "paper", "scissors"];

/**
 * Returns a random choice from the array of possible choices: "rock", "paper", or "scissors".
 * This function simulates the computer's move in a rock-paper-scissors game.
 *
 * @returns {string} The computer's choice as a string: "rock", "paper", or "scissors".
 */
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

document.getElementById("rock").addEventListener("click", function() {
  playRound("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", function() {
  playRound("paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", function() {
  playRound("scissors", getComputerChoice());
});


const resetButton = document.getElementById("reset-game");
resetButton.addEventListener("click", function() {
  humanScore = 0;
  computerScore = 0;
  updateChoiceViews("Your Choice", "Computer's Choice");
  roundResultView.textContent = "Round Result";
  updateScoreViews();
});

const humanScoreView = document.getElementById("human-score");
const computerScoreView = document.getElementById("computer-score");
const roundNumberView = document.getElementById("round-number");

/**
 * Updates the HTML elements that display the human player's score, the computer
 * player's score, and the current round number.
 */
function updateScoreViews() {
  humanScoreView.textContent = humanScore;
  computerScoreView.textContent = computerScore;
  roundNumberView.textContent = `Round ${humanScore + computerScore}`;
}
function updateChoiceViews(humanChoice, computerChoice) {
  const humanChoiceView = document.getElementById("human-round-choice");
  const computerChoiceView = document.getElementById("computer-round-choice");
  humanChoiceView.textContent = humanChoice;
  computerChoiceView.textContent = computerChoice;
}
let roundResultView = document.getElementById("round-result");
/**
 * Plays a round of Rock, Paper, Scissors.
 *
 * @param {string} humanChoice - The human player's choice. Must be "rock", "paper", or "scissors".
 * @param {string} computerChoice - The computer player's choice. Must be "rock", "paper", or "scissors".
 *
 * @returns {void}
 */
function playRound(humanChoice, computerChoice) {
  if (!humanChoice || !computerChoice) {
    console.log("Something went wrong. Please try again.");
    return;
  }
  if (humanChoice === "rock" && computerChoice === "scissors" ||
      humanChoice === "paper" && computerChoice === "rock" ||
      humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    roundResultView.innerHTML = `You win!`;
  } else if (humanChoice === computerChoice) {
    roundResultView.textContent = "Draw!";
  } else {
    computerScore++;
    roundResultView.innerHTML = `You lose!`;
  }
  updateChoiceViews(humanChoice, computerChoice);
  updateScoreViews()
}
