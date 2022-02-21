// Assignment code here

function generatePassword() {

    var char = "";
    var genPass = "";

    //Length prompts
    var minLength = window.prompt("Please enter the minimum length:");
    minLength =parseInt(minLength);
    var maxLength = window.prompt("Please enter the maximum length:");
    maxLength = parseInt(maxLength);

    var passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);


    //Character Value Prompts

    var lowCase = window.prompt("Include lower case characters? Enter 1 for yes");
    lowCase = parseInt(lowCase);
    if (lowCase = 1) {
        char += "abcdefghijklmnopqrstuvwxyz";
    }


    var upCase = window.prompt("Include upper case characters? Enter 1 for yes");
    upCase = parseInt(upCase);
    if (upCase = 1) {
        char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }


    var numeric = window.prompt("Include numeric characters? Enter 1 for yes");
    numeric = parseInt(numeric);
    if (numeric = 1) {
        char += "0123456789";
    }
   

    var special = window.prompt("Include special characters? Enter 1 for yes");
    special = parseInt(special);
    if (special = 1) {
        char += "~`!#$%^&*+=-[]\\\';,/{}|\":<>?"
    }

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * char.length);
        genPass += char.substring(randomNumber, randomNumber + 1);
    }
    return genPass;
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
