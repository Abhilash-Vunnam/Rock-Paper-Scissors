//randomly generated computer move

function getComputerChoice(){
  let computerSelection=["rock", 'paper', 'scissors']
  let randomIndex=Math.floor(Math.random()*computerSelection.length);
  return computerSelection[randomIndex]
  
}


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

// adding event listener for all the buttons that calls the function playRound with correct playerSection
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {


  button.addEventListener('click', ()=>{
    let playerSelection=button.id
    let computerSelection = getComputerChoice();
    console.log(playerSelection)
    console.log(computerSelection)
    let game=playRound(playerSelection, computerSelection)
    console.log(game)
  })

  
});

