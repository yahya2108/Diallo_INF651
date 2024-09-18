// Prompt the user to enter their score
const score = parseInt(prompt("Enter your score (0-100):"), 10);

// Initialize a variable to hold the letter grade
let grade;

if (score >= 90 && score <= 100) {
  grade = 'A';
} else if (score >= 80 && score < 90) {
  grade = 'B';
} else if (score >= 70 && score < 80) {
  grade = 'C';
} else if (score >= 60 && score < 70) {
  grade = 'D';
} else if (score < 60) {
  grade = 'F';
} else {
  grade = 'Invalid score';
}

// Display the letter grade
alert(`Your grade is: ${grade}`);
