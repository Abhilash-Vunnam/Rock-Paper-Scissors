function getComputerChoice(){
    let computerChoice=["rock", "paper", "scissors"]
    const randomIndex=Math.floor(Math.random()*computerChoice.length)
    return computerChoice[randomIndex]

}

