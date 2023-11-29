//You are tasked with building a Higher or Lower Guessing Game! 
// - The application should allow a user to: submit a number as their guess and receive response that their guess needs to be "higher" or "lower". 
// - When the user guesses the correct number, the app should congratulate them.

// Bonus: 
// Generate a random number every time the users plays the game.

let gameChoice = [Math.floor(Math.random() * 51)]

function gameGuess() {
    let userChoice = document.getElementById("number")
    let usersChoice = userChoice.value
        if(userChoice === gameChoice) {
        alert("Congratulations! You guessed the same number as the Computer.")
        } else if(usersChoice > gameChoice) {
        alert("Your number is higher. Try again!")
        } else if(usersChoice < gameChoice) {
        alert("Your number is lower. Try again!")
    }
}