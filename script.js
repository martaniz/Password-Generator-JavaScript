// Assignment code here


//start with var

var useNumbers;
var useSpeacialCharacters;
var useUpperCase;
var useLowerCase;



//password characters

specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var passwordVar=[]



// function length 





// FUNCTION generatePassword
function generatePassword() {

//prompt user imput password length 

var length =  parseInt(prompt("Chose a password length that is at least 8 characters and no more then 128"))
  console.log(length)

  if (length <= 8 || length >= 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 || length == NaN || length === "" || length === null ) {
    confirm("Make sure the password is between 8 and 128 characters long ")

  } 
  
  //use numbers/specialCharacters/upper and lower
  else {
    useNumbers = confirm("Would you like the password to include numbers");
    useSpeacialCharacters = confirm("Would you like the password to include specail characteres");
    useLowerCase = confirm("Would you like the password to include lower case ");
    useUpperCase = confirm("Would you like the password to include upper case");
  }

  if (!useNumbers && !useSpeacialCharacters && !useLowerCase && !useUpperCase) {
    choices = alert("You must choose a criteria!");
console.log(length)
}


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