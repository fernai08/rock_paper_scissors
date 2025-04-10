// Variables//
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const showresult = document.querySelector("#result");
const showHumanScore = document.querySelector("#humanScore"); 
const showComputerScore = document.querySelector("#computerScore");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const humanChoice = button.value;
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  });
});

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
// Function playRound, to determine the winner of the round and return the score //

function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  

  if (humanChoice === computerChoice) {
    showresult.textContent = "it's a tie!";
    return "It's a tie!";
  } else if (
    (humanChoice === rock && computerChoice === scissors) ||
    (humanChoice === paper && computerChoice === rock) ||
    (humanChoice === scissors && computerChoice === paper)
  ) {
    humanScore++;
    showresult.textContent = "You Win this round!";
    showHumanScore.textContent = humanScore;
    return "You win this round!";
  } else {
    computerScore++;
    showresult.textContent = "You lose this round!";
    showComputerScore.textContent = computerScore;
    return "You lose this round!";

  }
  
}
