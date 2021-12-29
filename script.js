

const computerPlay = () => {
    const possibleOptions = ["Rock", "Paper", "Scissors"]; 
    let  randomizer = parseInt(3 * ((Math.random()))); 
    console.log(randomizer); 
    return possibleOptions[randomizer]; 
}; 


const playRound = (playerSelection, computerSelection) => {
    const playerCase = playerSelection.toLowerCase(); 
    const computerCase = computerSelection.toLowerCase(); 

    if (computerCase==='rock' && playerCase==="scissors") {
        return [0, 1, "You Lose! Rock beats Scissors"]; 

    } else if (computerCase==='paper' && playerCase==="rock") {
        return [0, 1, "You Lose! Paper beats Rock"]; 

    } else if (computerCase==='scissors' && playerCase==="paper") {
        return [0, 1, "You Lose! scissors beats paper"]; 

    }
    else if (computerCase===playerCase) {
        return [0, 0, `Tied Game, ${playerCase} ties ${computerCase}`]; 

    } else {
        return [1, 0, `You win, ${playerCase} beats ${computerCase}`]; 
    }

}

const game = () => {
    let playerScore = 0; 
    let computerScore = 0; 
    for (let i = 0; i < 5; i++){
        let playerResponse = prompt("Input either Rock, Paper or Scissors"); 
        let answer = playRound (playerResponse, computerPlay()); 
        console.log(answer[2]); 
        playerScore+=answer[0]; 
        computerScore+=answer[1]; 
    }
    if (playerScore > computerScore) {
        console.log(`You have Won by ${playerScore}-${5-playerScore}`);
    } else if (playerScore === computerScore) {
        console.log(`Game is Tied, ${playerScore}-${5-playerScore}`); 
    }
    else {
        console.log(`You have lost ${playerScore}-${5-playerScore}`); 
    }

}

game();

//console.log(playRound(computerPlay(), computerPlay())); 