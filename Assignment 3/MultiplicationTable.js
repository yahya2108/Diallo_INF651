// Prompt the user to enter a number
const number = parseInt(prompt("Enter a number to generate its multiplication table:"), 10);

console.log(`Multiplication Table for ${number}:`);

// Use a for loop to display the multiplication table
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
