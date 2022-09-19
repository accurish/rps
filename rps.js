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

// Convert round result to be human readable and log to console
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

const chooseRock = document.querySelector('#rock');
chooseRock.addEventListener('click', () => playRound(getComputerChoice(), chooseRock.id));

const choosePaper = document.querySelector('#paper');
choosePaper.addEventListener('click', () => playRound(getComputerChoice(), choosePaper.id));

const chooseScissors = document.querySelector('#scissors');
chooseScissors.addEventListener('click', () => playRound(getComputerChoice(), chooseScissors.id));