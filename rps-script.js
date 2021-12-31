
// randomize computer play
const computerPlay = () => {
    const possibleOptions = ["Rock", "Paper", "Scissors"]; 
    let  randomizer = parseInt(3 * ((Math.random()))); 
    //console.log(randomizer); 
    return possibleOptions[randomizer]; 
}; 


// one round of rps, given player and computer inputs, outputs an array with scores and text
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

// automated 5 round game
const game = () => {
    let playerScore = 0; 
    let computerScore = 0; 
    /* for (let i = 0; i < 5; i++){
        let playerResponse = prompt("Input either Rock, Paper or Scissors"); 
        let answer = playRound (playerResponse, computerPlay()); 
        console.log(answer[2]); 
        playerScore+=answer[0]; 
        computerScore+=answer[1]; 
    } */
    if (playerScore > computerScore) {
        console.log(`You have Won by ${playerScore}-${5-playerScore}`);
    } else if (playerScore === computerScore) {
        console.log(`Game is Tied, ${playerScore}-${5-playerScore}`); 
    }
    else {
        console.log(`You have lost ${playerScore}-${5-playerScore}`); 
    }

}






const buttons = document.querySelectorAll(".play") // selecting the buttons

const container = document.querySelector('#container');


// score set up 
const scoreHeading = document.createElement('h3'); 
scoreHeading.classList.add ('scoreText')

let playerTally = 0; 
let computerTally = 0; 
scoreHeading.textContent = `${playerTally} - ${computerTally}`; 
container.append(scoreHeading); 


// commentary set up
const titleScore = document.createElement('div'); 
titleScore.classList.add('content');
titleScore.textContent = 'Let the game begin!';
container.appendChild(titleScore);
//console.log(titleScore)



buttons.forEach (button => {

    const gameFinisher = () => {
        titleScore.textContent= "GAME OVER!!!"; 
        button.removeEventListener('click', clickFunc);


    }

    // one button click event
    const clickFunc = () => {

        let buttonType =  button.getAttribute('data-key')
       
        // getting array result
        const resultRound = playRound(buttonType, computerPlay()); 
        
        // updating scores
        playerTally += resultRound[0]; 
        computerTally +=  resultRound[1]; 
        scoreHeading.textContent = `${playerTally} - ${computerTally}`; 

        titleScore.textContent= resultRound[2]; 
        if (playerTally === 5 || computerTally === 5) {
            gameFinisher(); 
        }
       
    }

    button.addEventListener("click", clickFunc)

});


 

// creating score divs 
//console.log(scoreHeading.textContent)

