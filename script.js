// Data to draw from for function using passOptions.valueCategory to reference.
let passOptions = {
  number: "1234567890",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  specChar: "!@#$%^&*()?.<\>|=+:;,[-_]",
  specChar: "!@#$%^&*()?.<\>|=+:;,[-_]"
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
  //console.log to ensure booleans logged correctly
  //console.log to ensure booleans logged correctly
  //console.log to ensure booleans logged correctly
  //console.log to ensure booleans logged correctly
  console.log(charAmount, numberBool, upperBool, lowerBool, specBool);
  // alerts user that their desired length does not meet requirements.
  if (charAmount <8 || charAmount >128) {
    window.alert("Error: Your passoword must contain 8-128 characters!")
  }
  // ensures at least one data type was chosen.
  if (numberBool == false && upperBool == false && lowerBool == false && specBool == false) {
    window.alert("Error: Your password must contain at least one character type.")
  }
   // UPDATE: Storage moved into function to be referenced.
   let storage = []; 
  // IF booleanvalue = true, then ADD data type associated with boolean name to STORAGE using +=.
  // pass.Options.category is used to reference the values within
  if (numberBool === true) {
    storage += passOptions.number;
    console.log(storage);
    // expected output: contents of number var. 
  } 
  if (upperBool === true) {
    storage += passOptions.upper;
    console.log(storage);
    //expected output: string associated with var upper behind other vars if user selected. 
  }
  if (lowerBool === true) {
    storage += passOptions.lower;
    console.log(storage);
    //expected output: string associated with var lower behind any other var strings if selected.
  }
  if (specBool === true) {
    storage += passOptions.specChar;
    console.log(storage);
    // expected output: string associated with var specChar behind any other strings the user selected.
  }
  //container for password
  let userPassword = "";
  for(i = 0; i < charAmount; i++) {
    // sets 0 as the start point in the array and it ends at the chosen charAmount value.
    let lengthReq = storage.substring(0, charAmount);
  // below randomizes chosen values.
    let locateSolution = Math.floor((Math.random() * storage.length));
    userPassword = userPassword + storage[locateSolution];
    //if statement to make length correct, substring names a beginning index and a value where to stop.
    if (userPassword < charAmount) {
      let shortPass = userPassword.substring(0, charAmount.length);
    } }
  //injects password into the html
  return userPassword;
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