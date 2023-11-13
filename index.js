console.log("hello world")

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
    return "It's a tie";
  } else if (result === "player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (result === "computer") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function getPlayerChoice() {
  let validatedInput = false;
  let choice;

  while (!validatedInput) {
    const choices = ["rock", "paper", "scissors"];
    choice = prompt("Enter your choice:").toLowerCase();

    if (choices.includes(choice)) {
      validatedInput = true;
      return choice;
    }
  }
}



function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;

  console.log("Welcome to Rock Paper Scissors");

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    const result = checkWinner(playerSelection, computerSelection);

    if (result === "player") {
      scorePlayer++;
    } else if (result === "computer") {
      scoreComputer++;
    }
  }

  if (scorePlayer > scoreComputer) {
    console.log("Player wins");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer wins");
  } else {
    console.log("We have a tie");
  }

  console.log("Game Over");
}

game();
