// Instructions:
// You are tasked with building Hangman! The application should allow a user to: select a category, view the number of lives they have left, submit a guess, receive a hint, and just play a game of hangman! 


// - the user should guess letters in a word
// -  if the word contains the guess letter the letter should be filled in to the user
// - if the word does not contain the letter then they should be told their guess is incorrect 
// - the user wins if they guess the word  (and should notify the user)
// - the user loses if they run out of guesses (and should notify the user)
// - there should be multiple words to be selected


//Identify words to use in game:
const words = ["RADCLIFF", "LOVE", "BLACKBERRY", "FAMILY", "YOUTH"]
const hiddenWords = ["_ _ _ _ _ _ _ _", "_ _ _ _", "_ _ _ _ _ _ _ _ _ _", "_ _ _ _ _ _", "_ _ _ _ _"]
const hints = ["Hometown", "Heart", "Phone", "People", "Mentorship"]
// const toFindDuplicates = array => array.filter((item.index) = arr.indexOf(item) !== index)

//Mix up words so they aren't in order:
const randomNumber = Math.floor(Math.random() * 5)

//Disguise words so they're hidden:
const word = words[randomNumber]
let hiddenWord = hiddenWords[randomNumber]
const hint = hints[randomNumber]
// const duplicateElement = toFindDuplicates[array]

//Identify livesLeft count:
let livesLeft = 7

//Word retrieval:
const wordElement = document.getElementById("word")
const hintElement = document.getElementById("hint")
const livesElement = document.getElementById("lives")

//How to update as items are selected:
wordElement.innerText = hiddenWord
hintElement.innerText = hint
livesElement.innerText = livesLeft

//Create a function that will pass through guesses and attempts:
function guess(letter) {
    alert(`You selected ${letter}.`)
    // if(wordElement.has(duplicates) === true) {
    //     return duplicates;
    // }

    if(word.includes(letter) === true) {
        alert("Correct!")
        let indexofLetter = word.indexOf(letter)
        indexofLetter = indexofLetter + indexofLetter
        let stringArray = hiddenWord.split('')
        stringArray[indexofLetter] = letter
        let newHiddenString = stringArray.join("")
        hiddenWord = newHiddenString
        wordElement.innerText = hiddenWord
    } else {
        alert("Incorrect.")
        livesLeft--
        livesElement.innerText = livesLeft
        if(livesLeft === 0) {
            alert("You lost :( Try Again!")
        }
    }
}