function getComputerChoice() {
    const stringArray = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * stringArray.length);
    const randomlySelectedString = stringArray[randomIndex];
    return randomlySelectedString;
}

let score = {
    pointsOfPlayer: 0,
    pointsOfComputer: 0,
};


function playRound(playerSelection, computerSelection) {
    
    if (score.pointsOfPlayer === 5 || score.pointsOfComputer === 5) {
        if (score.pointsOfComputer === score.pointsOfPlayer) {
            alert("There is a Tie");
        }
        else if (score.pointsOfComputer > score.pointsOfPlayer) {
            alert("Computer wins")
        }
        else {
            alert("You win");
        }
        
        score = {
            pointsOfComputer: 0,
            pointsOfPlayer: 0,
        }
    }

    if ((playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')) {
        score.pointsOfComputer++;
        return ("You Lose! " + computerSelection + " beats " + playerSelection);

    }
    else if ((playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'rock' && computerSelection == 'scissors')) {
        score.pointsOfPlayer++;
        return ("You Win! " + playerSelection + " beats " + computerSelection);

    }
    else if ((playerSelection == 'paper' && computerSelection == 'paper') ||
        (playerSelection == 'scissors' && computerSelection == 'scissors') ||
        (playerSelection == 'rock' && computerSelection == 'rock')) {
        return ("Tie!");
    }
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    return playRound(playerSelection, computerSelection);
}




// Adding event listeners to button


const buttonRock = document.querySelector(".buttonRock");
buttonRock.addEventListener('click', () => {
    const roundResult = document.querySelector(".roundResult");
    roundResult.innerText = game('rock');


});
const buttonPaper = document.querySelector(".buttonPaper");
buttonPaper.addEventListener('click', () => {
    const roundResult = document.querySelector(".roundResult");
    roundResult.innerText = game('paper');
});
const buttonScissors = document.querySelector(".buttonScissors");
buttonScissors.addEventListener('click', () => {
    const roundResult = document.querySelector(".roundResult");
    roundResult.innerText = game('scissors');
});







