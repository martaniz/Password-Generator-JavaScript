// Assignment code here
var specialCharacters="!@#$%^&*()"
var numbers="1234567890"
var lettersUpper="QWERTYUIOPASDFGHJKLZXCVBNM"
var letterLower="qwertyuiopasdfghjklzxcvbnm"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generate password function
function generatePassword() {


  

  var length =  parseInt(prompt("Chose a password length that is at least 8 characters and no more then 128"))
  console.log(length)

  if (length < 8 || length > 128 || length == NaN || length === "" || length === null ) {
    confirm("Password must be at least 8 characters and no more then 128 ")

  }


  var numbers =  (window.confirm("Would you like to include numbers in the password"))
  console.log(numbers)

  var specialCharacters = (window.confirm("Would you like to include special characters"))
  console.log(specialCharacters)

  var lettersUpper =  (window.confirm("Would you like to include upper case in the password"))
  console.log(lettersUpper)

  var letterLower =  (window.confirm("Would you like to include lower case  in the password"))
  console.log(letterLower)

 

   

    confirm("Press a button!");

  
   














    /*else {
      var isLowerCase = confirm("Do you want to include lower case characters ") 
      console.log(isLowerCase)
      }
      */

  // confirm
  // variable for upper


 


  // lower 

  




  // for loop

}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);