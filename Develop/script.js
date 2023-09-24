// variables:
var generateBtn = document.querySelector("#generate");
  var uppercaseChar = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  var lowercaseChar = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  var numberChar = ("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
  var specialChar = ("@", "%", "$", "#", "^", "*", "&", "(", ")", "-", "_", "=", "+", "!", "+");
  var result = [];
  var userChoiceArray = [];


// password input:
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// generate password:
function generatePassword() {
  console.log("Let's generate a password!");
    // variable for character prompt... and an alert when incorrect amount is chosen:
    var charAmount = parseInt(prompt("How many characters between 8-128 would you like your password to have?"));
    if (charAmount < 8 || charAmount > 128 || charAmount === "") {
      alert("The password length you have entered is invalid. Please enter a new character limit.")
      return charAmount;
    }
  
  // variables for character prompts:
    var uppercase = confirm("Would you like to include UPPERCASE lettes in your password?");
    var lowercase = confirm("Would you like to use lowercase letters in your password?");
    var numbers = confirm("Would you like to include NUM83R5 in your password?");
    var special = confirm("Would you like to include $peci@l characters in your password?");

// if this character is chosen, then it will be added:
  if (uppercase = ("Would you like to include UPPERCASE lettes in your password?")) {
    result = result.concat(uppercaseChar); 
  }

  if (lowercase = ("Would you like to use lowercase letters in your password?")) {
    result = result.concat(lowercaseChar);
  }

  if (numbers = ("Would you like to include NUM83R5 in your password?")) {
    result = result.concat(numberChar);
  }

  if (special = ("Would you like to include $peci@l characters in your password?")) {
    result = result.concat(specialChar);
  }
  
  console.log(result);
  console.log("Hope you enjoy your password!");

// randomizer for password generation:
  for (var i = 0; i < charAmount; i++) {
    userChoiceArray.push (result[Math.floor(Math.random() * result.length)]);
  }
  return userChoiceArray.join("");

};

// Add event listener to generate button:
generateBtn.addEventListener("click", writePassword);