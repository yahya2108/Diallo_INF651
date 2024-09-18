// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = 0;

while (userGuess !== randomNumber) {
  // Prompt the user for their guess
  userGuess = parseInt(prompt("Guess the number between 1 and 10:"), 10);
  
  // Check if the guess is correct
  if (userGuess === randomNumber) {
    alert("Congratulations! You guessed the correct number!");
  } else {
    alert("Try again!");
  }
}
