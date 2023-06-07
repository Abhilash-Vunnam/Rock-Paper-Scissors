function getComputerChoice(){
    let computerChoice=["rock", "paper", "scissors"];
    const randomIndex=Math.floor(Math.random()*computerChoice.length);
    return computerChoice[randomIndex];
}
const computerSelection=getComputerChoice()
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
  const playerSelections = playerSelection.toLowerCase();
  const computerSelections = computerSelection.toLowerCase();
 


  const results = {
    rock: {
      beats: "scissors",
      loses: "paper"
    },
    scissors: {
      beats: "paper",
      loses: "rock"
    },
    paper: {
      beats: "rock",
      loses: "scissors"
    }
  };

  if (playerSelections === computerSelections) {
      score=-1
    return "It's a tie";
  } else {
    const playerMove = results[playerSelections];
    const computerMove = results[computerSelections];
    if(playerSelections==computerMove.loses){
      score=1
      return `you win! ${playerSelections} beats ${computerSelections}`;
    }
    else{
      score=0
      return `you lose! ${computerSelections} beats ${playerSelections} `;
    }
    
    
  }
}

const playerSelection="rock"
const game=playRound(playerSelection, computerSelection)
console.log(game)


