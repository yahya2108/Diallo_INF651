// Prompt the user to enter a number between 1 and 7
const dayNumber = parseInt(prompt("Enter a number between 1 and 7:"), 10);

let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid input";
    break;
}

// Display the day of the week
alert(`The day is: ${dayName}`);
