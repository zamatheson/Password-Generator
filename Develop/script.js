// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function validateLength(passLength) {
  var passLength = Number(prompt("Enter a password length of 8-128 characters."));
  console.log(passLength);

  if (validateLength(passLength)) {
  } else {
    alert("The password you have entered is invalid.")
    return '';
  }

}


function validateCriteria() {
   var charCriteria = prompt("Please include: uppercase, lowercase, number and special");
  console.log(charCriteria);

  if (validateCriteria(charCriteria)) {
  } else {
    alert("The password you have entered is invalid")
    return '';
  }

}




function generatePassword() {
var charArray = { 
  uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase = 'abcdefghijklmnopqrstuvwxyz',
  number = '0123456789',
  special = '!@#$%^&*()_+{}|:"<>?/.,';[]'\',

}

function getRandomInt(max: any) {
  return Math.floor(Math.random() * max: any);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);