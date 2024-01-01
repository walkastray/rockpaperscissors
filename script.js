function playRound(playerSelection, computerSelection){

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
        case 2:
            choice = "paper";
        case 3:
            choice = "scissors";
    }

    return choice;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();