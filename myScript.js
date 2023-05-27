function getComputerChoice(){
    let computerChoice=["rock", "paper", "scissors"];
    const randomIndex=Math.floor(Math.random()*computerChoice.length);
    return computerChoice[randomIndex];
}


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
 
 

 function game(){
    let playerScore=0
    let computerScore=0
    for(let i=0;i<5;i++){
        const playerSelection="Rock"
        const computerSelection=getComputerChoice();
        result=playRound(playerSelection, computerSelection)
        if(score==1){
            playerScore++;
        }
        else if(score==0){
            computerScore++;
        }
        else if(score==-1){

            continue;
        }

        

        
    }
    if (playerScore>computerScore){
        console.log( "you won!")
    }
    else if(playerScore<computerScore){
        console.log ("computer won!")
    }
    else{
        console.log ("Tie")
    }
    

 }
 
 game()
