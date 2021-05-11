// Code for the game

// function for computer result
function computerPlay() {
    choices = ["rock", "paper", "scissor"]

    computerChosen = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChosen)
}

// run function
computerPlay()

