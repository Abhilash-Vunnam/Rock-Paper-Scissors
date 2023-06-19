let playerScore = 0;
let computerScore = 0;

// Function to randomly choose computer's selection
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a round
function playRound(playerSelection) {
    const computerSelection = computerPlay();
    let result = '';

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
    }

    // Update the UI with the result and scores
    const resultDiv = document.querySelector('.result');
    resultDiv.textContent = result;

    const scoreDiv = document.createElement('div');
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    resultDiv.appendChild(scoreDiv);

    // Check if either player has reached 5 points
    if (playerScore === 5) {
        resultDiv.textContent = 'Congratulations! You win the game!';
        resetGame();
    } else if (computerScore === 5) {
        resultDiv.textContent = 'Oops! Computer wins the game.';
        resetGame();
    }
}

// Reset the game by resetting the scores
function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

// Add event listeners to the buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', () => {
    playRound('Rock');
});

paperBtn.addEventListener('click', () => {
    playRound('Paper');
});

scissorsBtn.addEventListener('click', () => {
    playRound('Scissors');
});
