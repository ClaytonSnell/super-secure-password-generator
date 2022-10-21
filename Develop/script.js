// Targets the generate button id in the html
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// was not able to put backslash in the array below either by using double or single quotes**?????
var specialChar = ["!", "#", "$", "%", "&"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "7", "8", "9"];

var chosenChar = [];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





function generatePassword() {
  console.log("you've clicked the generate password button");
  
  var password = ""
  var length = prompt("Please choose lenght of password between 8 and 126 characters")
  if (length < 8 || length > 126) {
    return "This does not have the correct length"
  }
  var wantUpper = confirm("Do you want upper case letters in the password?")
  var wantLower = confirm("Do you want lower case letters in the password?")
  var wantNumber = confirm("Do you numbers in the password?")
  var wantSpecial = confirm("Do you want any special characters in the password?")


   if (wantUpper) {
    chosenChar = chosenChar.concat(upperCase)
   }

   if (wantLower) {
    chosenChar = chosenChar.concat(lowerCase)
   }

   if (wantNumber) {
    chosenChar = chosenChar.concat(number)
   }

   if (wantSpecial) {
    chosenChar = chosenChar.concat(specialChar)
   }

   for (let i = 0; i <= length; i++) {
    var randomIndex = Math.floor(Math.random() * chosenChar.length)
    var randomChar = chosenChar[randomIndex]
    password += randomChar
  }

    return password

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

