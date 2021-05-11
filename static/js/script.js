// Code for the game

function game() {

let rounds = 0;
let playerScore = 0;
let computerScore = 0;


  // Function for computer result
    function computerPlay() {
        choices = ["rock", "paper", "scissor"];

        computerChosen = choices[Math.floor(Math.random() * choices.length)];
        return computerChosen;
    }

    // This is the logic for the game and checks who's won the round.
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
        console.log("It's a draw! You both chose the same!");
        }

        if (
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "scissor" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
        ) {
            // Increase player score by 1 
            playerScore++
        console.log(
            "You won with " + playerSelection + " against PC's " + computerSelection
        );
        } else if (
        (computerSelection == "rock" && playerSelection == "scissor") ||
        (computerSelection == "scissor" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
        ) {
            //  Increase computer score by 1
            computerScore++
        console.log(
            "The PC won with " + computerSelection + " against your " + playerSelection
        );
        }
    }

    // checks to see if rounds is less than 5 and if it is then keeps looping.
    while(rounds <5){  

        // Checks user input, sets it to lowercase and then confirms it matches the options.
        const playerSelection = prompt("Please enter: Rock, Paper, Scissor").toLocaleLowerCase();
        if (
            playerSelection == "rock" ||
            playerSelection == "paper" ||
            playerSelection == "scissor"
        ) {

            // Gets the CPU answer from the function above.
            const computerSelection = computerPlay();
            
            // increase the round by 1
            rounds++

            // Runs the play round function
            playRound(playerSelection, computerSelection);

        } else {

            alert("That's not an option, refresh the page.");
        }

    } 
    if(playerScore > computerScore) {
        console.log("That's 5 rounds and you won, congrats!")
    } else {
        console.log("That's 5 rounds and you lost, better luck next time!")
    }       
}

// Initiate the game.
game();