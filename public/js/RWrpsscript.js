//For this project you will make a Rock, Paper, and Scissors game.

//The design of your webpage is completely up to you. The only requirements are as follows:
//- A user is able to choose between three options, Rock, Paper, and Scissors.
//- When an option is chosen, it must be obvious to the use which option has been chosen.
//- When clicking a 'submit' button, the user's choice will be submitted and it will be compared against a randomly generated computer choice.
//- The user is then presented with an alert that tells them if they won, tied, or lost, and includes the user's input as well as the computer's input.

let game = ["rock", "paper", "scissors"]
let computerChoice = game[Math.floor(Math.random() * 3)]
let rockChoice = document.getElementById("rock")
let paperChoice = document.getElementById("paper")
let scissorsChoice = document.getElementById("scissors")
let usersGuess

function userGuess() {
    if(rockChoice.checked === true) {
        usersGuess = "rock"
    }
    if(paperChoice.checked === true) {
        usersGuess = "paper"
    }
    if(scissorsChoice.checked === true) {
        usersGuess = "scissors"
    }
}

function assess() {
    userGuess()
    if(usersGuess === "rock" && computerChoice === "rock") {
        alert("You tied :/ Both picked rock.")
    } else if(usersGuess === "rock" && computerChoice === "paper") {
        alert("You lost :( Paper covers rock.")
    } else if(usersGuess === "rock" && computerChoice === "scissors") {
        alert("You won :) Rock breaks scissors!")
    } else if(usersGuess === "paper" && computerChoice === "rock") {
        alert("You won :) Paper covers rock!")
    } else if(usersGuess === "paper" && computerChoice === "paper") {
        alert("You tied :/ Both picked paper.")
    } else if(usersGuess === "paper" && computerChoice === "scissors") {
        alert("You lost :( Scissors cuts paper.")
    } else if(usersGuess === "scissors" && computerChoice === "rock") {
        alert("You lost :( Rock breaks scissors.")
    } else if(usersGuess === "scissors" && computerChoice === "paper") {
        alert("You won :) Scissors cuts paper!") 
    } else if(usersGuess === "scissors" && computerChoice === "scissors") {
        alert("You tied :/ Both picked scissors.")
    }
}