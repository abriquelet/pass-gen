// Data to draw from for function using passOptions.valueCategory to reference.
let passOptions = {
  number: "1234567890",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  specChar: "!@#$%^&*()?.<\>|=+:;,[-_]",
  storage:[]
}
// Below lies the function that runs when the button is clicked.
let generatePassword = function() {
  // Collects length and boolean values so they are ready for immediate use.
  // window prompts and confirms are limited in submit options, wordin
  let charAmount = window.prompt("How long would you like your password to be? (Must be at least 8 characters and no longer than 128 characters");
  let numberBool = window.confirm("Include numbers? (OK to include, cancel to proceed to next question).");
  let upperBool = window.confirm("Include uppercase letters? (OK to include, cancel to proceed to next question).");
  let lowerBool = window.confirm("Include lowercase letters? (OK to include, cancel to proceed to next question).");
  let specBool = window.confirm("Include special characters? (OK to include, cancel to proceed to next question).");
  // added a console.log to ensure data was getting logged correctly after user input.
  // Currently they're mostly booleans, must be turned into something to reference allowable data above by ref parent.
  console.log(charAmount, numberBool, upperBool, lowerBool, specBool);
  // alerts user that their desired length does not meet requirements.
  if (charAmount <8 || charAmount >128) {
    window.alert("Error: Your passoword must contain 8-128 characters!")
  }
  // ensures at least one data type was chosen.
  if (numberBool == false && upperBool == false && lowerBool == false && specBool == false) {
    window.alert("Error: Your password must contain at least one character type.")
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);