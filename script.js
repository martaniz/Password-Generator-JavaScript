// Assignment code here
// lets write out some varibles 

var useLowerCase = "abcdefghijklmnopqrstuvwxyz";
var useUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var useNumbers = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"


var passwordLength;
var uperCase;
var number;
var specialCharacter;


var generateBtn = document.querySelector("#generate");






//my first function lets write a function to determin the length of the password
//call function length
function length() {
 
 passwordLength = prompt("chose the length");

 if (passwordLength < 00000008){
   alert("to short")
   length();
 }
 else if (passwordLength >  999999 999999999999999999999999999999999999999999999999 999999999999999999999999999999999999999999999999999999999 99999999999999999) {
   alert("to long");
 }




 
}
//execute function length
length();


// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
