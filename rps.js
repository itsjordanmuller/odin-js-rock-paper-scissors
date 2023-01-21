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
console.log(computerChoice(randomNum));