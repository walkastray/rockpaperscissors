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


    if(playerSelection == computerSelection){

        return `Draw! ${playerSelection} ties with ${computerSelection}`;

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

const buttons = document.querySelectorAll('button');
const divResult = document.querySelector('#result');

let scorePlayer = 0;
let scoreComp = 0;


buttons.forEach((item) => {

    item.addEventListener('click', (e) => {

        if(scorePlayer != 5 && scoreComp != 5){

            let roundWinner = playRound(e.target.id, getComputerChoice());
            if(roundWinner.includes('Win')){

                scorePlayer++;

            } else if(roundWinner.includes('Lose')){

                scoreComp++;

            }

            roundWinner +=  `\n Player: ${scorePlayer}` +
                            `\n Computer: ${scoreComp}`;

            appendResult(roundWinner);

        } else {

            let message = "";

            if(scorePlayer > scoreComp){

                message = "Player wins!";

            } else {

                message = "Computer wins!";

            }

            message +=  `\n Player: ${scorePlayer}` +
                        `\n Computer: ${scoreComp}`;

            appendResult(message);

        }

    });

});

function appendResult(result){

    console.log(result);
    divResult.textContent = result;

}