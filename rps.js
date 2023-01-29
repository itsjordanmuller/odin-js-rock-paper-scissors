// Select Random Number Between 1 & 3
let randomNum = Math.floor((Math.random() * 3) + 1);
//
// computerChoice Function to Convert 1-3 to Rock Paper or Scissors
function computerChoice(randomNum) {
    if (randomNum === 1) {
        return "Rock";
    } else if (randomNum === 2) {
        return "Paper";
    } else if (randomNum === 3) {
        return "Scissors";
    } else {
        return "Error - Invalid Input"
    }
}

// Get computer's choice
let computerSelection = computerChoice(randomNum);

// Get player's choice
//let userInput = prompt("Enter your choice: Rock, Paper or Scissors");
let userInput = "paper";
// Capitlization Function
function capitalize(userInput) {
    return(userInput.charAt(0)).toUpperCase().concat((userInput.slice(1, userInput.length)).toLowerCase())
}

let playerSelection = capitalize(userInput);

// playRound function
function playRound (playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "It's a Tie!";
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "Computer Wins!"
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "Computer Wins!"
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "Computer Wins!"
    }
    else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        return "Player Wins!"
    }
    else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        return "Player Wins!"
    }
    else if (computerSelection === "Rock" && playerSelection === "Paper") {
        return "Player Wins!"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    let randomNum = Math.floor((Math.random() * 3) + 1);
    let computerSelection = computerChoice(randomNum);
    let userInput = prompt("Enter your choice: Rock, Paper or Scissors");
    let playerSelection = capitalize(userInput);
    let result = playRound(playerSelection, computerSelection);
    console.log("Result: " + result);

    if (result === "Player Wins!") {
        playerScore++;
    } else if (result === "Computer Wins!") {
        computerScore++;
    }

console.log("Player Score: " + playerScore);
console.log("Computer Score: " + computerScore);
if (playerScore > computerScore) {
    console.log("Player wins the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a Tie!");
    }
}

game();