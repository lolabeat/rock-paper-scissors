const options = ["rock","paper", "scissors"];
let scorePlayer = 0;
let scoreComputer = 0;
let ties = 0;
let rounds = 0;

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("comp-score");
const messageLabel = document.getElementById("message");

rockButton.addEventListener("click", function() {
  playerClickButton("rock")
});

paperButton.addEventListener("click", function() {
  playerClickButton("paper")
});

scissorsButton.addEventListener("click", function() {
  playerClickButton("scissors")
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function playerClickButton(playerButtonSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerButtonSelection, computerSelection);
  let message = "Computer selected  " + computerSelection + ".";
  if(result == "player") {
    message += " Player won round";
    scorePlayer++
  } else if(result == "computer") {
    message += "Computer won round";
    scoreComputer++
  } else {
    message += " Round was tied"
  }
  playerScore.textContent = `Player Score: ${scorePlayer}`;
  computerScore.textContent = `Computer Score: ${scoreComputer}`;
  console.log(message)
  messageLabel.textContent = message
  rounds++;
  checkWinner();
}

function checkWinner() {
  if (rounds === 5) {
    if (scorePlayer > scoreComputer) {
      messageLabel.textContent = "You won the game!";
    } else if (scoreComputer > scorePlayer) {
      messageLabel.textContent = "The computer won the game!";
    } else {
      messageLabel.textContent = "It's a Tie"
    }
  }
}
