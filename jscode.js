let thrownNumber;
let computerChoice;
let playerChoice;
let result;
let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
    thrownNumber = Math.floor(Math.random()*3);
    switch (thrownNumber) {
        case 0: 
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "scissor";
            break;
        case 2: 
            computerChoice = "paper";
    }
}
function playRound(playerChoice,computerChoice) {
        let valid;
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissor") {
            valid = true;
        }
        if (valid != true) {
            return "invalid";
        } else if (playerChoice === computerChoice) {
            return "draw";
        } else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissor") || (playerChoice === "scissor" && computerChoice === "rock")) {
            return "loss";
        } else {
            return "win";
        }
}
function interpretResult(result){
    switch (result) {
      case "invalid":
        console.log("Player did not enter a valid input");
        break;
      case "draw": 
        console.log(`Game was a draw. Player chose ${playerChoice} and Computer chose ${computerChoice}`);
        break;
      case "loss": 
        console.log(`Game ended in defeat for the player. Player chose ${playerChoice} and Computer chose ${computerChoice}.`);
        computerScore++;
        break;
      case "win": 
        console.log(`Game ended in victory for the player. Player chose ${playerChoice} and Computer chose ${computerChoice}.`);
        playerScore++;
        break;
    }
}
function playGame() {
    getComputerChoice();
    playerChoice = prompt("What do you choose?").toLowerCase();
    result = playRound(playerChoice,computerChoice);
    interpretResult(result);
    console.log(`Player's score is ${playerScore} and computer's score is ${computerScore}`)
}
playGame();
while (playerScore < 5 && computerScore < 5) {
    console.log("Let's play another game!");
    playGame();
}
if (computerScore === 5) {
    console.log("Computer Wins!");
} else if (playerScore === 5) {
    console.log("Player Wins!");
}
