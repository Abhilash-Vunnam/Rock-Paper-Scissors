//randomly generated computer move

function getComputerChoice(){
  let computerSelection=["rock", 'paper', 'scissors']
  let randomIndex=Math.floor(Math.random()*computerSelection.length);
  return computerSelection[randomIndex]
  
}
const computerSelection = getComputerChoice();
console.log(computerSelection)

// a function that plays single round of game
function playRound(playerSelection, computerSelection){
  // converting  both strings to lower case
  let playerChoice=playerSelection.toLowerCase();
  let computerChoice=computerSelection.toLowerCase();
  // finding the winner
  if(playerChoice===computerChoice){
    return "its a tie"
  }else if(playerChoice=="rock" && computerChoice=="scissors"){
    return `you win! rock beats scissors`
  }
  else if(playerChoice=="paper" && computerChoice=="rock"){
    return `you win! paper beats rock`
  }else if(playerChoice=="scissors" && computerChoice=="paper"){
    return `you win! scissors beats paper`
  }else{
    return `you Lose! ${computerChoice} beats ${playerChoice}`
  }
}


const playerSelection = "scissors";

console.log(playRound(playerSelection, computerSelection));


