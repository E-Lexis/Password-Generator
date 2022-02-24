// Assignment code here

function generatePassword() {

    //Initializes password
    var char = "";
    var genPass = "";

    //Length prompts
    var minLength = window.prompt("Please enter the minimum length of desired characters:");
    minLength =parseInt(minLength);
    var maxLength = window.prompt("Please enter the maximum length of desired characters:");
    maxLength = parseInt(maxLength);

    var passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);


    //Character Value Prompts
    var lowCase = window.prompt("Include lower case characters (a - z) ? Enter 1 for yes");
    lowCase = parseInt(lowCase);
    if (lowCase == 1) {
        char += "abcdefghijklmnopqrstuvwxyz";
    }
    else {
        char = char;
    }

    var upCase = window.prompt("Include upper case characters (A - Z);? Enter 1 for yes");
    upCase = parseInt(upCase);
    if (upCase == 1) {
        char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    else {
        char = char;
    }

    var numeric = window.prompt("Include numeric characters (0 - 9)? Enter 1 for yes");
    numeric = parseInt(numeric);
    if (numeric == 1) {
        char += "0123456789";
    }
    else {
        char = char;
    }

    var special = window.prompt("Include special characters? (!#$%^&*...) Enter 1 for yes");
    special = parseInt(special);
    if (special == 1) {
        char += "~`!#$%^&*+=-[]\\\';,/{}|\":<>?"
    }
    else {
        char = char;
    }

    //Selects a default character value if all prior prompts are answered "no"
    if (lowCase !== 1 && upCase !== 1 && numeric !== 1 && special !== 1) {
        char = "abcdefghijklmnopqrstuvwxyz";
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
