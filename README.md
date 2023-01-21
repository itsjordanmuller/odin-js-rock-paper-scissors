# Rock Paper Scissors - The Odin Project
A JavaScript Program meant to demonstrate the basic fundamentals of using HTML and JavaScript together.

## Goals

### Basic Setup
- [x] Start Git Repo
- [x] Create README.md
- [x] Create Blank HTML Document
- [x] Create External JS File
- [x] Link External JS File

### getComputerChoice Function
- [x] Create Function 'getComputerChoice' to Randomly Pick
- [x] Use the Console to Ensure this Function is Behaving

### playRound Function
- [x] Create Function 'playRound' to Play a Single Round
- [x] The Function Should Have Inputs: 'playerSelection' and 'computerSelection'
- [x] The Function will Return the String that Declares a Winner

### Make playRound Case Insensitive
- [ ] Make 'playRound' ignore cases

### Make Function Return
- [ ] Make Function use return instead of Display via console.log()

#### Return Function Notes
function playRound(playerSelection, computerSelection) {
  // your code here!
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

### game Function
- [ ] Create a Function Called 'game()'
- [ ] Call the playRound function insde of this one to play a 5 round game
- [ ] Keep score and report the winner and loser at the end
- [ ] Use a loop to play 5 rounds

#### game Function Loop Notes
for (let i = 0; i < 5; i++) {
   // your code here!
}


### console.log() the End Results
- [ ] Make sure the End Results Show via console.log()

### User Prompt
- [ ] Get Input from the User