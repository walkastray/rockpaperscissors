/**
 * Gets the computer's choice for rock paper scissors
 * @returns string of rock, paper or scissors
 */
function getComputerChoice(){

    let num = Math.floor(Math.random() * 3) + 1;
    let choice;

    switch(num){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }

    return choice;
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Simulate round if 
    while(playerSelection == computerSelection){

        playerSelection = prompt("You tied! Try again").toLowerCase();
        computerSelection = getComputerChoice();
    }

    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "paper":
                    return "You Lose! Paper beats Rock";
                    break;
                case "scissors":
                    return "You Win! Rock beats Scissors";
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "You Win! Paper beats Rock";
                    break;
                case "scissors":
                    return "You Lose! Scissors beats Paper";
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "You Lose! Rock beats Scissors";
                    break;
                case "paper":
                    return "You Win! Scissors beats Paper";
                    break;
            }
            break;
    }

}

function game(){

    let playerScore = 0;
    let compScore = 0;
    let result;
    let message;
    let playerMove;
    let computerMove;

    // Simulate 5 rounds
    for(let i = 0; i < 5; ++i){
        
        // Get the moves
        playerMove = prompt("Make your move");
        computerMove = getComputerChoice();

        // 
        result = playRound(playerMove, computerMove);
        console.log(result);

        // Increment score for winner
        if(result.includes("Win")){
            playerScore++;
        } else {
            compScore++;
        }

    }

    if(playerScore > compScore){
        message =   "You win!\n";
    } else {
        message  = "You lose...\n";
    }

    message += `player: ${playerScore} \n` +
                `computer: ${compScore}`;

    console.log(message);
}

game();