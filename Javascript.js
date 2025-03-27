// Variables//
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let humanScore = 0;
let computerScore = 0;

// Function getComputerChoice //
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return rock;
  } else if (randomNumber === 1) {
    return paper;
  } else {
    return scissors;
  }
}

// Function getHumanChoice //
function getHumanChoice() {
  let userChoice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();

  if (userChoice === rock || userChoice === paper || userChoice === scissors) {
    return userChoice;
  } else {
    alert("Invalid Input, try again!");
    return getHumanChoice(); // Ask again until valid input
  }
}

// Function playRound, to determine the winner of the round and return the score //

function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === rock && computerChoice === scissors) ||
    (humanChoice === paper && computerChoice === rock) ||
    (humanChoice === scissors && computerChoice === paper)
  ) {
    humanScore++;
    return "You win this round!";
  } else {
    computerScore++;
    return "You lose this round!";
  }
}
// Function playGame , five rounds will be played and in each round we will collect humanChoice and computerChoice //

function playGame() {
  // Round 1 //
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  console.log(playRound(humanChoice, computerChoice));
  console.log("Human Score: " + humanScore, "Computer Score: " + computerScore);

  // Round 2 //
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  console.log(playRound(humanChoice, computerChoice));
  console.log("Human Score: " + humanScore, "Computer Score: " + computerScore);

  // Round 3 //
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  console.log(playRound(humanChoice, computerChoice));
  console.log("Human Score: " + humanScore, "Computer Score: " + computerScore);

  // Round 4 //
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  console.log(playRound(humanChoice, computerChoice));
  console.log("Human Score: " + humanScore, "Computer Score: " + computerScore);

  // Round 5 //
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  console.log(playRound(humanChoice, computerChoice));
  console.log("Human Score: " + humanScore, "Computer Score: " + computerScore);

  if (humanScore > computerScore) {
    return "you win!!";
  } else if (humanScore < computerScore) {
    return "You Loose!!";
  } else if (humanScore === computerScore) {
    return "It's a tie!!";
  }
}

console.log(playGame());
