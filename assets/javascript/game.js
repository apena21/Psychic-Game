// Set up an array of letters.
 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];
 
// Creating variables to hold the number of wins, losses, guesses starting at zero, and a history of the letters guessed. 
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var computerSelection = letters[Math.floor(Math.random() * letters.length)];

//var userGuessRemain=0;

 
// Creating a variable to hold the number of user guesses remaining.
var userGuessRemain = 9; 
  
// FUNCTIONS
// ==========================================================================
 
// This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        console.log("computer letter is " + computerSelection)
                      
        // Determines which key was pressed by user.
        var userGuess = event.key;
        console.log("user guess is " + userGuess)

         // if the user's guess matches the computer's selection the user gets 1 point for Wins
        if (userGuess === computerSelection){
            wins++;
            resetGame();
        // if the user's guess does not match the computer's then the number of guesses remaining goes down by 1    
        }   else if (userGuess != computerSelection){
            userGuessRemain--;
            lettersGuessed.push(userGuess);
            console.log("letter guessed array is " + lettersGuessed);
            console.log("user guess after incorrect guess " + userGuessRemain);
        // if the number of user's guesses is 0 then the user loses a point    
        }   else if (userGuessRemain === 0) {
            losses++;
            resetGame();
        }

        updateWins();
        updateLosses();
        updateGuessesRemaining();

    }

        // Computer randomly chooses a variable from the letters array.
        
        // function to reset guesses after a game ends

        //function resetGuesses() {
          //  document.getElementById("userGuessRemain").value = 0;
        //}
        
        //function resetLettersGuessed() {
          //  document.getElementById("lettersGuessed").value = "";
        //}

        function resetGame()  {
            document.getElementById("userGuessRemain").value = 0;
            document.getElementById("lettersGuessed").value = "";
            userGuessRemain=9;
            lettersGuessed="";
            computerSelection = letters[Math.floor(Math.random() * letters.length)];
        }
        
        // This logic determines the outcome of the game (win/loss), and increments the appropriate number
        //for (userGuessRemain=9, userGuessRemain > 0; userGuessRemain--;) {
            
        
            // for(numGuesses=0; numGuesses<10; numGuesses++) {

           
         

           //     document.write(event.key);
           //     document.getElementById("userGuess").onkeyup = function()
           //
        
           
        //}
    
        // Function that updates the number of wins...
        function updateWins() {
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
        }

        // Function that updates the number of losses...
        function updateLosses() {
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
        }

        // Function that updates the number of guesses remaining...
       function updateGuessesRemaining() {
            document.querySelector("#userGuessRemain").innerHTML = "Guesses left: " + userGuessRemain;
        }

        //function that track your guesses
       // function updateYourGuessesSoFar() {
         //   document.querySelector("#lettersGuessed").appendChild = "Your guesses so far: " + lettersGuessed;
        //}

       /* function updateYourGuessesSoFar() {
            var i=0;
            do {
                lettersGuessed += "Your guesses so far: " + i;
                i++;
            }
            while (i <9);
            document.getElementById("#lettersGuessed").innerHTML = "Your guesses so far" + lettersGuessed;
        }*/


       
        //updateYourGuessesSoFar();
 
               
               
                /*
    // If there are no guesses remaining, reset screen and add a point to either wins or losses;
    else {
        document.querySelector("userGuessRemain").innerHTML = "0";
        }
}
 
// Function that updates the score...
function updateScore() {
    document.querySelector("wins").innerHTML = "Wins " + wins;
}
 
/*
// If there are no more questions, stop the function.
if (num_guesses === 10) {
    return;
}
 
/*
 
// Determine which key was pressed, make it lowercase, and set it to the userInput variable.
var userInput = String.fromCharCode(event.keyCode).toLowerCase();
// if user guess match
 
// Only run this code if user's guess matches the computer selection.
if (userInput === computerSelection) {
    wins++;
    updatewins();
    }
 
    // If they guess the correct answer, increase and update score, alert them they got it right.
    if (userInput === questionsArray[questionIndex][1]) {
        alert("Correct!");
        score++;
        updateScore();
    }
    // If wrong, alert them they are wrong.
    else {
        alert("Wrong!");
    }
 
    // Increment the questionIndex variable and call the renderQuestion function.
    questionIndex++;
    renderQuestion();
 
 
 
 
/*
// This function is run whenever the user presses a key.
document.onkeyup = function(guess) {
   
// Determines which key was pressed.
var userGuess = guess.key;
 
// This logic determines the outcome of the game (win/loss/guesses remaining), and increments the appropriate number
//function guessTheLetter(){
    // If there are still more guesses left, render the next one.
}
if (userGuess != computerSelection){
losses++ && userGuessRemain--;
 
document.write(losses());
 
} else if (userGuess ==computerSelection){
    wins++;
}
 
//create loop to offer user 9 attempts to guess the letter
//for (var userGuessRemain = 1; userGuessRemain < 10; userGuessRemain--);
 
// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
 
document.write(Date());
 
var html =
"<p>You chose: " + userGuess + "</p>" +
"<p>The computer chose: " + computerGuess + "</p>" +
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>ties: " + ties + "</p>";
 
 
 
// if letter does not match computer's letter, then guesses left decreases by 1 and the user's letter is cummulatively displayed in "your
//guesses so far"
 
// display new number of guesses left
// repeat until guesses left is 0 or until guesses match
 
// if guesses left reaches 0, add 1 to "losses"
 
// if user's letter matches computer's letter, then add 1 to "wins" and reset
 
 
 
*/