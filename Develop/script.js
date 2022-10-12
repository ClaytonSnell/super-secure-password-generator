// Targets the generate button id in the html
var generateBtn = document.querySelector("#generate");

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  function generatePassword() {
    console.log("you've clicked the generate password button")

    return "generated password will go here"
  }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








