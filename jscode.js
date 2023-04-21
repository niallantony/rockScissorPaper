let thrownNumber;
let computerChoice;
let playerChoice;
let result;
let playerScore = 0;
let computerScore = 0;
let game = true;

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
        if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissor") || (playerChoice === "scissor" && computerChoice === "rock")) {
            computerScore++;
        } else if (playerChoice === computerChoice) {
            break;
        } else {
            playerScore++
        }
}
function throwComputer (thrown){
    compZone.innerText = '';
    const thrownTitle = document.createElement('div');
    const thrownImage = document.createElement('IMG');
    thrownImage.setAttribute('src',`images/${thrown}.png`);
    thrownImage.classList.add('thrown-image')
    thrownTitle.textContent = `Computer: ${thrown}`;
    thrownTitle.classList.add('thrown-text');
    compZone.appendChild(thrownTitle);
    compZone.appendChild(thrownImage);
}
function throwPlayer (thrown){
    playerZone.innerText = '';
    const thrownTitle = document.createElement('div');
    const thrownImage = document.createElement('IMG');
    thrownImage.setAttribute('src',`images/${thrown}.png`);
    thrownImage.classList.add('thrown-image')
    thrownTitle.textContent = `Player: ${thrown}`;
    thrownTitle.classList.add('thrown-text');
    playerZone.appendChild(thrownTitle);
    playerZone.appendChild(thrownImage);
}

function playGame(playerChoice) {
    getComputerChoice();
    console.log(playerChoice);
    result = playRound(playerChoice,computerChoice);
    throwPlayer(playerChoice);
    throwComputer(computerChoice);

    score.textContent=`Player's score is ${playerScore} and computer's score is ${computerScore}`
    if (computerScore === 5) {
        endGame("Computer");
        game = false;
    } else if (playerScore === 5) {
        endGame("Player");
        game = false;
    }
}
function endGame(winner) {
    winnerDisplay.classList.add('winner');
    winnerDisplay.textContent = `${winner} Wins!`;
    scoredisplay.appendChild(winnerDisplay);
    scoredisplay.removeChild(score); 
    newGame.classList.add('button');
    newGame.textContent = "Play Again?";
    scoredisplay.appendChild(newGame);
    newGame.addEventListener('click',startNewGame);
}

function startNewGame() {
    game = true;
    playerScore = 0;
    computerScore = 0;
    playerZone.innerText = '';
    compZone.innerText = '';
    scoredisplay.removeChild(newGame);
    scoredisplay.removeChild(winnerDisplay);
    scoredisplay.appendChild(score);
    score.textContent = '';
}

const buttons = document.querySelectorAll('button');
const playerZone = document.querySelector('#player');
const compZone = document.querySelector('#computer');
const score = document.querySelector('.score');
const scoredisplay = document.querySelector('.scoredisplay');
const buttonContainer = document.querySelector('.button-container')
const newGame = document.createElement('button');
const winnerDisplay = document.createElement('div');
buttons.forEach(button => button.addEventListener('click', function (e) {
    playerChoice=e.target.id;
    if (game===true) {
    playGame(playerChoice);
    }
}));


/*
Original Code

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
*/