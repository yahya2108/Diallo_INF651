let password;
let confirmPassword;

do {
  // Prompt the user to set a password
  password = prompt("Set your password:");
  
  // Prompt the user to confirm the password
  confirmPassword = prompt("Confirm your password:");
  
  // Check if the passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
  }
} while (password !== confirmPassword);

alert("Password confirmed successfully!");
