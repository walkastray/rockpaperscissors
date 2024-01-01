function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = playerSelection.toLowerCase();

    while(playerSelection == computerSelection){

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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));