let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  const humanChoice = prompt("This is the Rock, Paper, Scissors game.\nChoose one of the following:\nRock(R)\nPaper(P)\nScissors(S)").toLowerCase();
  if (humanChoice === "r" || humanChoice === "rock") {
    return "rock";
  } else if (humanChoice === "p" || humanChoice === "paper") {
    return "paper";
  } else if (humanChoice === "s" || humanChoice === "scissors") {
    return "scissors";
  }
  console.log("Invalid choice. Please try again.");
  return getHumanChoice(); // Prompt again if invalid choice
}

function playRound(humanChoice, computerChoice) {
  if (!humanChoice || !computerChoice) {
    console.log("Something went wrong. Please try again.");
    return;
  }
  if (humanChoice === "rock" && computerChoice === "scissors" ||
      humanChoice === "paper" && computerChoice === "rock" ||
      humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice === computerChoice) {
    console.log("Draw!");
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
  console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
}

playGame();
