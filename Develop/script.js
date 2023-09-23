// Assignment Code
var generateBtn = document.querySelector("#generate");
  var uppercaseChar = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  var lowercaseChar = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  var numberChar = ("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
  var specialChar = ("@", "%", "$", "#", "^", "*", "&", "(", ")", "-", "_", "=", "+", "!", "+");
  var result = [];
  var array = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var charAmount = prompt("How many characters between 8-128 would you like your password to have?");
  if (charAmount < 8 || charAmount > 128 || charAmount === "") {
    alert("The password length you have entered is invalid. Please enter a new character limit.")
    return charAmount;
  }
  var uppercase = confirm("Would you like to include UPPERCASE lettes in your password?");
  var lowercase = confirm("Would you like to use lowercase letters in your password?");
  var numbers = confirm("Would you like to include numbers in your password?");
  var special = confirm("Would you like to include special characters in your password?");

  if (uppercase) {
    result = result.concat(uppercaseChar);
  }

  if (lowercase) {
    result = result.concat(lowercaseChar);
  }

  if (numbers) {
    result = result.concat(numberChar);
  }

  if (special) {
    result = result.concat(specialChar);
  }
  
  console.log(result);

  for (var i = 0; i < charAmount; i++) {
    array.push (result[Math.floor(Math.random() * result.length)]);
  }
  return array.join("");
}


  














  // randomizer
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);