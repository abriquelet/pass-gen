// Data to draw from for function using passOptions.valueCategory to reference.
let passOptions = {
  number: "1234567890",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  specChar: "!@#$%^&*()?.<\>|=+:;,[-_]",
  // Data needs to be called from in here and sent into the storage array to be manipulated further down.
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
  // Find way to call upon the actual data that needs to be mixed as opposed to boolean values.
  // Reference the variables within the function(the ones with prompts that are booleans) to confirm types used.

        // CODE TO ADD CHOSEN TYPES TO STORAGE ARRAY

        //console.log(passOptions.storage); to ensure data was placed into the array as the correct data type.

  // Randomize contents of the array generated

  //take the result and inject it into the provided text box on the page so it can be copied.
  //inner.html?
  // if that doesn't work, send a prompt formatted like so: "Your password is: chosenResult"

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