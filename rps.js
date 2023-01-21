// Select Random Number Between 1 & 3
let randomNum = Math.floor((Math.random() * 3) + 1);
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
// Print Out Computer Choice in Console
computerSelection = computerChoice(randomNum);
userInput = "rock";

playerSelection = "Rock";

console.log("Computer Choice: "+computerSelection)
console.log("Player Choice: "+playerSelection)
function playRound (playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "It's a Tie!";
    }
    else if (computerSelection == "Paper" && playerSelection == "Rock") {
        return "Computer Wins!"
    } 
    else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        return "Computer Wins!"
    }
    else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        return "Computer Wins!"
    }
    else if (computerSelection == "Rock" && playerSelection == "Paper") {
        return "Player Wins!"
    }
    else if (computerSelection == "Paper" && playerSelection == "Scissors") {
        return "Player Wins!"
    }
    else if (computerSelection == "Scissors" && playerSelection == "Rock") {
        return "Player Wins!"
    }
}

console.log(playRound(computerSelection, playerSelection));