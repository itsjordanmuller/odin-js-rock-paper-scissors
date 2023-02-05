document.addEventListener("DOMContentLoaded", function() {
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");
    const resultDisplay = document.querySelector("#result");
    const scoreDisplay = document.querySelector("#score");
    const roundDisplay = document.querySelector("#round");
    const resetButton = document.querySelector("#reset");

    let playerScore = 0;
    let computerScore = 0;
    let round = 1;

    function updateRound() {
        roundDisplay.innerHTML = `Round ${round}`;
      }
      

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
        } else if (
            computerSelection === "Scissors" &&
            playerSelection === "Paper"
        ) {
            computerScore++;
            return "Computer Wins!";
        } else if (
            computerSelection === "Rock" &&
            playerSelection === "Scissors"
        ) {
            computerScore++;
            return "Computer Wins!";
        } else if (
            computerSelection === "Paper" &&
            playerSelection === "Rock"
        ) {
            computerScore++;
            return "Computer Wins!";
        } else {
            playerScore++;
            return "Player Wins!";
        }
    }

    function updateScore() {
        scoreDisplay.innerHTML = `Player: ${playerScore} Computer: ${computerScore}`;
        if (playerScore === 5) {
            resultDisplay.innerHTML = "Player wins the game!";
        } else if (computerScore === 5) {
            resultDisplay.innerHTML = "Computer wins the game!";
        }
    }

    function handleButtonClick(playerSelection) {
        if (playerScore < 5 && computerScore < 5) {
            resultDisplay.innerHTML = playRound(playerSelection);
            updateScore();
            round++;
            updateRound();
        }
    }

    // Reset the game when the reset button is clicked
    resetButton.addEventListener("click", function() {
        playerScore = 0;
        computerScore = 0;
        round = 1;
        resultDisplay.innerHTML = "";
        scoreDisplay.innerHTML = `Player: ${playerScore} Computer: ${computerScore}`;
        updateRound();
    });

    //Update the round display when a button is clicked
    rockButton.addEventListener("click", function() {
        handleButtonClick("Rock");
    });

    paperButton.addEventListener("click", function() {
        handleButtonClick("Paper");
    });

    scissorsButton.addEventListener("click", function() {
        handleButtonClick("Scissors");
    });
});