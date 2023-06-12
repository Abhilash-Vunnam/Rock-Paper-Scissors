//randomly generated computer move

function getComputerChoice(){
  let computerSelection=["rock", 'paper', 'scissors']
  let randomIndex=Math.floor(Math.random()*computerSelection.length);
  return computerSelection[randomIndex]
  
}
const computerSelection = getComputerChoice();


// a function that plays single round of game
function playRound(playerSelection, computerSelection){
  // converting  both strings to lower case
  let playerChoice=playerSelection.toLowerCase();
  let computerChoice=computerSelection.toLowerCase();
  // finding the winner
  if(playerChoice===computerChoice){
    result=0;
    return "its a tie"
  }else if(playerChoice=="rock" && computerChoice=="scissors"){
    result=1;
    return `you win! rock beats scissors`
  }
  else if(playerChoice=="paper" && computerChoice=="rock"){
    result=1;
    return `you win! paper beats rock`
  }else if(playerChoice=="scissors" && computerChoice=="paper"){
    result=1
    return `you win! scissors beats paper`
  }else{
    result=-1
    return `you Lose! ${computerChoice} beats ${playerChoice}`
  }
}
// this function is used to play the game for 5 times and announce the winner at the end 
function game(){
  let playerScore=0;
  let computerScore=0;
  let Ties=0;

  for (i=0; i<5; i++){
    const computerSelection = getComputerChoice();
    let playerSelection=prompt("type your choice ")
    const Rps=playRound(playerSelection, computerSelection)
    if (result===1){
      playerScore++;
    }else if(result===-1){
      computerScore++;
    }else if(result===0){
      Ties++
    }else{
      continue
    }
    
  }
  console.log(playerScore)
  console.log(computerScore)
  console.log(Ties)
  if(playerScore>computerScore){
     
  }else if(playerScore<computerScore){
    console.log("computer won!")
  }else{
    console.log("it's Tie")
  }
  

}

let a=game()

