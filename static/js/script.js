// Code for the game

// function for computer result
function computerPlay() {
    choices = ["rock", "paper", "scissor"]

    computerChosen = choices[Math.floor(Math.random() * choices.length)];
    return computerChosen
}


function playRound(playerSelection, computerSelection) {

}

// Checks user input, sets it to lowercase and then confirms it matches the if statement.
const playerSelection = prompt("Please enter: rock, paper, scissors").toLocaleLowerCase();
if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissor") {
//    Code goes here.
} else {
    alert("That's not an option, refresh the page.");
}

// displays what the user has typed after it's been processed.
console.log(playerSelection);


const computerSelection = computerPlay();


// run function
computerPlay()

