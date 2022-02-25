// Assignment code here

function generatePassword() {

    //Initializes password
    var char = "";
    var genPass = "";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numChar = "0123456789";
    var specialChar = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";

    //Length prompts
    var minLength = window.prompt("Please enter the minimum length of desired characters:");
    minLength = parseInt(minLength);
    var maxLength = window.prompt("Please enter the maximum length of desired characters:");
    maxLength = parseInt(maxLength);

    var passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);

    //Character Prompts
    var lowCase = window.prompt("Include lower case characters (a - z) ? Enter 1 for yes");
    var upCase = window.prompt("Include upper case characters (A - Z);? Enter 1 for yes");
    var numeric = window.prompt("Include numeric characters (0 - 9)? Enter 1 for yes");
    var special = window.prompt("Include special characters? (!#$%^&*...) Enter 1 for yes");

    var confLow = parseInt(lowCase);
    var confUp = parseInt(upCase);
    var confNum = parseInt(numeric);
    var confSpec = parseInt(special);

    
    //Repeats prompts if all are answered "no"
    if (confLow != 1 && confUp != 1 && confNum != 1 && confSpec != 1) {
        window.alert("In order to generate your password, at least one selection must be made.");
        lowCase = window.prompt("Include lower case characters (a - z) ? Enter 1 for yes");
        upCase = window.prompt("Include upper case characters (A - Z);? Enter 1 for yes");
        numeric = window.prompt("Include numeric characters (0 - 9)? Enter 1 for yes");
        special = window.prompt("Include special characters? (!#$%^&*...) Enter 1 for yes");

        confLow = parseInt(lowCase);
        confUp = parseInt(upCase);
        confNum = parseInt(numeric);
        confSpec = parseInt(special);
    }
    if (confLow == 1) {
        char += lowerCase;
    }
    if (confUp == 1) {
        char += upperCase;
    }
    if (confNum == 1) {
        char += numChar;
    }
    if (confSpec == 1) {
        char += specialChar;
    }    

    //Generates password
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
