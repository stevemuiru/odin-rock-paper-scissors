console.log("hello world")

let playerChoice;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const results = document.querySelector('.results');
const playAgainButton = document.querySelector('.play-again');

let roundsPlayed = 0;
let scorePlayer = 0;
let scoreComputer = 0;
let tieCount = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);

  if (result === "tie") {
    const p = document.createElement('p');
    p.innerText = "It's a tie";
    results.appendChild(p);
    tieCount++;
  } else if (result === "player") {
    const p = document.createElement('p');
    p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    results.appendChild(p);
    scorePlayer++;
  } else if (result === "computer") {
    const p = document.createElement('p');
    p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    results.appendChild(p);
    scoreComputer++;
  }
  
}

function checkGameEnd() {
  if (scorePlayer >= 5 || scoreComputer >= 5 || tieCount >=5 ){
    const winnerMessage = document.createElement('h2');
    if (scorePlayer > scoreComputer) {
      winnerMessage.innerText = "Winner Winner Chicken Dinner";
    } else if (scorePlayer < scoreComputer) {
      winnerMessage.innerText = "Loser";
    } else {
      winnerMessage.innerText = "We have a tie";
    }
    results.appendChild(winnerMessage);

    const gameOverMessage = document.createElement('h2');
    gameOverMessage.innerText = "Game over";
    results.appendChild(gameOverMessage);

    restartGame();
  }

}
function showPlayAgainButton(show) {
  const playAgainButton = document.getElementById("playAgainButton");
  if (show) {
    playAgainButton.style.display = "block";
  } else {
    playAgainButton.style.display = "none";
  }
}


function restartGame() {
  playerChoice = null;
  showPlayAgainButton(true);
  document.getElementById(".play-again").style.display = "block";
  
  
}

rockButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerChoice = 'rock';
  playRound(playerChoice, computerSelection);
  roundsPlayed++;
  checkGameEnd();
});

paperButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerChoice = 'paper';
  playRound(playerChoice, computerSelection);
  roundsPlayed++;
  checkGameEnd();
});

scissorsButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerChoice = 'scissors';
  playRound(playerChoice, computerSelection);
  roundsPlayed++;
  checkGameEnd();
});

playAgainButton.addEventListener('click', () => {
restartGame();
});