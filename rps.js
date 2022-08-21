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

// Pass computer and player selections on switches for each player selection, then output the result
function playRPS(computerSelection, playerSelection) {
  const result;
  
  switch (playerSelection) {
    
    case 'rock':
      result = computerSelection === 'paper' ? 'You lose! Paper beats Rock' :
      computerSelection === 'scissors' ? 'You win! Rock beats Scissors' :
      'It\'s a tie!';

      return result;

    case 'paper':
      result = computerSelection === 'scissors' ? 'You lose! Scissors beats Paper' :
      computerSelection === 'rock' ? 'You win! Paper beats Rock' :
      'It\'s a tie!';
    
      return result;

    case 'scissors':
      result = computerSelection === 'rock' ? 'You lose! Rock beats Scissors' :
      computerSelection === 'paper' ? 'You win! Scissors beats Paper' :
      'It\'s a tie!';

      return result;
  }
}

const gameResult = playRPS(getComputerChoice(),getPlayerChoice());

console.log(gameResult);
// Ensure the player's choice is valid, then return it in lowercase
/*function validatePlayerChoice(playerChoice) {
  playerChoice = playerChoice.toLowerCase();
  
  if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
    return playerChoice;
  } else {
    getPlayerChoice();
  }
} */