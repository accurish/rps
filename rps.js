// Randomly generate computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const guess = Math.floor(Math.random() * 3);
  return choices[guess];
}

// Compare each choice to get a result, which is returned as an int
function playRound(computerSelection, playerSelection) {
  let result;

  if (playerSelection === 'rock') {
    result = computerSelection === 'paper' ? 'Lose' :
    computerSelection === 'scissors' ? 'Win' : 'Draw';
  } else if (playerSelection === 'paper') {
    result = computerSelection === 'scissors' ? 'Lose' :
    computerSelection === 'rock' ? 'Win' : 'Draw';
  } else {
    result = computerSelection === 'rock' ? 'Lose' :
    computerSelection === 'paper' ? 'Win' : 'Draw';
  }
  logResult(result, computerSelection, playerSelection);
  return result;
}

// Convert round result to be human readable and log to console
function logResult(result, computerSelection, playerSelection) {
  // Capitalize terms for aesthetics
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1);
  computerSelection = computerSelection[0].toUpperCase() + computerSelection.substring(1);

  var resultText = document.querySelector('#result-box');

  switch (result) {
    case 'Lose':
      resultText.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`
      break;
    
    case 'Win':
      resultText.textContent = `You win! ${playerSelection} beats ${computerSelection}.`
      break;

    case 'Draw':
      resultText.textContent = `It's a draw! You both chose ${playerSelection}.`;
  }
}

const chooseRock = document.querySelector('#rock');
chooseRock.addEventListener('click', () => playRound(getComputerChoice(), chooseRock.id));

const choosePaper = document.querySelector('#paper');
choosePaper.addEventListener('click', () => playRound(getComputerChoice(), choosePaper.id));

const chooseScissors = document.querySelector('#scissors');
chooseScissors.addEventListener('click', () => playRound(getComputerChoice(), chooseScissors.id));