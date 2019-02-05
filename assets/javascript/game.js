
//change to lowercase
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessLeft = 0;

var computerChoiceText = document.getElementById("computerChoice-text");
var yourGuessText= document.getElementById("yourGuess-text");
var winsText = document.getElementById("Wins");
var lossesText = document.getElementById("Losses");
var guessesLeftText = document.getElementById("Guesses Left");

var informationText = document.getElementById("information-text");

    


document.onkeyup = function (event) {

    var userGuess=event.key;

    var gameGuessingNumber = Math.floor(Math.random() * computerChoice.length);
        
        

    

    if (gameGuessingNumber === userGuess) {
        
        winsText.textContent = "Wins: " + wins++;
        
        if (wins >= 1) {

            guessesLeftText.textContent = "Guess Left: " + 10;
            guessLeft = 9;

            alert("You must be psychic!");
        }

    }

    else {

        guessesLeftText.textContent = "Guess Left: " + guessLeft--;


        if (guessLeft <= -1) {


            lossesText.textContent = "Loss: " + losses++;
            
            alert("Awwww! Looks like you're not psychic, afterall! Try Again");

            guessesLeftText.textContent = "Guess Left: " + 10;
            guessLeft = 9;

        }

    }

    
}

computerChoiceText.textContent = "Computer Choice: " + gameGuessingNumber;