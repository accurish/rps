// Randomly generate computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const guess = Math.floor(Math.random() * 3);
  return choices[guess];
}

// Get choice from the player and make it case insensitive
function getPlayerChoice() {
  const playerChoice = prompt('Enter Rock, Paper, or Scissors');
  return playerChoice.toLowerCase();
}

// Compare each choice to get a result, which is output as an int
function playRound(computerSelection, playerSelection) {
  let result;

  if (playerSelection === 'rock') {
    result = computerSelection === 'paper' ? 0 :
    computerSelection === 'scissors' ? 1 : 2;
  } else if (playerSelection === 'paper') {
    result = computerSelection === 'scissors' ? 0 :
    computerSelection === 'rock' ? 1 : 2;
  } else {
    result = computerSelection === 'rock' ? 0 :
    computerSelection === 'paper' ? 1 : 2;
  }
  logResult(result, computerSelection, playerSelection);
  return result;
}

// Output round result to the console
function logResult(result, computerSelection, playerSelection) {
  switch (result) {
    case 0:
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
      break;
    
    case 1:
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
      break;

    case 2:
      console.log(`It's a tie!`)
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i < 1; i++) {
    playRound(getComputerChoice(), getPlayerChoice())
  }
}