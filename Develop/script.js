// Assignment code here

function genPass() {

    //Length prompts
    var minLength = window.prompt("Please enter the minimum length:");
    minLength =parseInt(minLength);
    var maxLength = window.prompt("Please enter the maximum length:");
    maxLength = parseInt(maxLength);

    //Character Value Prompts

    var lowCase = window.prompt("Include lower case characters? Enter 1 for yes");
    lowCase = parseInt(lowCase);
    if (lowCase = 1) {
        //include lowercase in password generator
        //return true
    }
    else {
        return false;
    }


    var upCase = window.prompt("Include upper case characters? Enter 1 for yes");
    upCase = parseInt(upCase);
    if (upCase = 1) {
        //include lowercase in password generator
        //return true
    }
    else {
        return false;
    }


    var numeric = window.prompt("Include numeric characters? Enter 1 for yes");
    numeric = parseInt(numeric);
    if (numeric = 1) {
        //include lowercase in password generator
        //return true
    }
    else {
        return false;
    }


    var special = window.prompt("Include special characters? Enter 1 for yes");
    special = parseInt(special);
    if (parseInt(special) = 1) {
        //include lowercase in password generator
        //return true
    }
    else {
        return false;
    }

};






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
