function getComputerChoice(){
    const stringArray = ['rock','paper','scissors'];
    const randomIndex = Math.floor(Math.random() * stringArray.length);
    const randomlySelectedString = stringArray[randomIndex];
    return randomlySelectedString; 
}

var pointsOfPlayer = 0;
var pointsOfComputer = 0;

 
function game(){
   
    function playRound(playerSelection, computerSelection) {
        
        let playerSelectionCaseInsensitive = playerSelection.toLowerCase();
        if((playerSelectionCaseInsensitive == 'rock' && computerSelection == 'paper') ||
         (playerSelectionCaseInsensitive == 'paper' && computerSelection == 'scissors') ||
            (playerSelectionCaseInsensitive == 'scissors' && computerSelection == 'rock')){
                pointsOfComputer++;
                return ("You Lose! " + computerSelection + " beats " +  playerSelectionCaseInsensitive);
               
                
            }
        else if((playerSelectionCaseInsensitive == 'paper' && computerSelection == 'rock') || 
        (playerSelectionCaseInsensitive == 'scissors' && computerSelection == 'paper') ||
        (playerSelectionCaseInsensitive == 'rock' && computerSelection == 'scissors')){
            pointsOfPlayer++;
            return ("You Win! " + playerSelectionCaseInsensitive + " beats " + computerSelection);
                
        }
        else if((playerSelectionCaseInsensitive == 'paper' && computerSelection == 'paper') ||
         (playerSelectionCaseInsensitive == 'scissors' && computerSelection == 'scissors') ||
        (playerSelectionCaseInsensitive == 'rock' && computerSelection == 'rock')){
            return ("Tie!");
        }
        } 
      const playerSelection = prompt();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}


for (let round = 1; round <= 5.; round++) {
    game();    

}

if(pointsOfComputer>pointsOfPlayer){
    console.log("Computer Wins!")
}
else if(pointsOfComputer<pointsOfPlayer){
    console.log("You Wins!")
}
else if(pointsOfComputer===pointsOfPlayer){
    console.log("Tie!")
}
    









