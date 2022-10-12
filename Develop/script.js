// Targets the generate button id in the html
var generateBtn = document.querySelector("#generate");

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// was not able to put backslash in the array below either by using double or single quotes**?????
var specialChar = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","/",":",";","<","=",">","?","@","[","]"]
var number = ["0","1","2","3","4","5","6","7","7","8","9"]



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








