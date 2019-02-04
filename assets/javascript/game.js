var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 1;
var losses = 1;
var guessLeft = 10;

function getElementbyId(element) {
    var information = document.getElementById(element);
    return information;
}


document.onkeyup = function (event) {

    var gameGuessingNumber = Math.floor(Math.random() * letters.length),
        
        randomGuess = letters[gameGuessingNumber],

        information = document.createTextNode(event.key + ", ");

    getElementbyId("yourGuess").appendChild(information);

    if (randomGuess === event.key) {
        
        getElementbyId("wins").textContent = "Wins: " + wins++;
        
        if (wins >= 1) {

            getElementbyId("guessesLeft").textContent = "Guess Left: " + 10;
            guessLeft = 9;

            alert("You won!");
        }

    }

    else {

        getElementbyId("guessesLeft").textContent = "Guess Left: " + guessLeft--;


        if (guessLeft <= -1) {


            getElementbyId("losses").textContent = "Loss: " + losses++;
            
            alert("You Lost! Try Again");

            getElementbyId("guessesLeft").textContent = "Guess Left: " + 10;
            guessLeft = 9;



        }

    }

}
