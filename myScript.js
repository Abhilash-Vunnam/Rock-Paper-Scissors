function getComputerChoice(){
    let computerChoice=["rock", "paper", "scissors"]
    const randomIndex=Math.floor(Math.random()*computerChoice.length)
    return computerChoice[randomIndex]
}

function playRound(playerSelection, computerSelection){
    const playerSelections = playerSelection.toLowerCase()
    if (playerSelections == computerSelection){
        return "its a tie";
    }
    else if(playerSelections =="rock"&& computerSelection =="paper"){
        return "You Lose! Paper beats Rock"

    }
    else if(playerSelections =="rock"&& computerSelection =="scissors"){
        return "You Win! Rock beats Scissors"
    }
    else if(playerSelections=="paper" && computerSelection =="rock"){
        return "You Win! Paper beats Rock" 
    }
    else if(playerSelections=="paper" && computerSelection =="scissors"){
        return "You Lose! Scissors beats Paper"
    }
    else if(playerSelections=="scissors" && computerSelection =="rock"){
        return "You Lose! rock beats scissors"
    }
    else if (playerSelections=="scissors" && computerSelection =="paper"){
        return "You Win! scissors beats paper"

    }
    else{
        return "something went wrong"
    }

}
