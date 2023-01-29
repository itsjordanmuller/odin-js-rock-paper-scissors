document.addEventListener("DOMContentLoaded", function() {

    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");
    const resultDisplay = document.querySelector("#result");
    const scoreDisplay = document.querySelector("#score");

    let playerScore = 0;
    let computerScore = 0;
    let round = 1;

    function computerChoice() {
        let randomNum = Math.floor((Math.random() * 3) + 1);
        if (randomNum === 1) {
            return "Rock";
        } else if (randomNum === 2) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }

    function playRound(playerSelection) {
        let computerSelection = computerChoice();
        if (computerSelection === playerSelection) {
            return "It's a Tie!";
        } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
            computerScore++;
            return "Computer Wins!";
        } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
            computerScore++;
            return "Computer Wins!";
        } else if (computerSelection === "Paper" && playerSelection === "Rock") {
            computerScore++;
            return "Computer Wins!";
        } else {
            playerScore++;
            return "Player Wins!";
        }
    }

    function updateScore() {
        scoreDisplay.innerHTML = `Player: ${playerScore} Computer: ${computerScore}`;
        if (playerScore === 5 || computerScore === 5) {
            resultDisplay.innerHTML = playerScore === 5 ? "Player wins the game!" : "Computer wins the game!";
            rockButton.style.display = "none";
            paperButton.style.display = "none";
            scissorsButton.style.display = "none";
        }
    }

    rockButton.addEventListener("click", function() {
        resultDisplay.innerHTML = playRound("Rock");
        updateScore();
    });

    paperButton.addEventListener("click", function() {
        resultDisplay.innerHTML = playRound("Paper");
        updateScore();
    });

    scissorsButton.addEventListener("click", function() {
        resultDisplay.innerHTML = playRound("Scissors");
        updateScore();
    });

});