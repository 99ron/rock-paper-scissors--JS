// Code for the game

// Function for computer result
function computerPlay() {
    choices = ["rock", "paper", "scissor"]

    computerChosen = choices[Math.floor(Math.random() * choices.length)];
    return computerChosen
}

// This is the logic for the game and checks who's won the round.
function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection ) {
        console.log("It's a draw! You both chose the same!");
    }

    if(playerSelection == "rock" && computerSelection == "scissor"
    || playerSelection == "scissor" && computerSelection == "paper" 
    || playerSelection == "paper" && computerSelection == "rock") {
        console.log("You won with " + playerSelection + " against PC's " + computerSelection);

    } else if(computerSelection == "rock" && playerSelection == "scissor"
    || computerSelection == "scissor" && playerSelection == "paper" 
    || computerSelection == "paper" && playerSelection == "rock") {
        console.log("The PC won with " + computerSelection + " against your " + playerSelection);
    }
}

// .::Start of the code::.
// Checks user input, sets it to lowercase and then confirms it matches the options.
const playerSelection = prompt("Please enter: Rock, Paper, Scissor").toLocaleLowerCase();
if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissor") {
    
    // Gets the CPU answer from the function above.
    const computerSelection = computerPlay();

    // Runs the play round function 
    playRound(playerSelection, computerSelection);

} else {
    alert("That's not an option, refresh the page.");
}






