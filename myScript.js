function getComputerChoice(){
    let computerChoice=["rock", "paper", "scissors"];
    const randomIndex=Math.floor(Math.random()*computerChoice.length);
    return computerChoice[randomIndex];
}
let computerSelection=getComputerChoice()
console.log(computerSelection)
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
      return "It's a tie";
    } else {
      const playerMove = results[playerSelections];
      const computerMove = results[computerSelections];
      if(playerSelections==computerMove.loses){
        return `you win! ${playerSelections} beats ${computerSelections}`;
      }
      else{
        return `you lose! ${computerSelections} beats ${playerSelections} `;
      }
      
      
    }
  }
 let playerSelection="PapER" 
 console.log(playRound(playerSelection, computerSelection))