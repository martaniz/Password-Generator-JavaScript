// Assignment code here
// lets write out some varibles
//used prettier to tidy up 

var useLowerCase = "abcdefghijklmnopqrstuvwxyz";
var useUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var useNumbers = "0123456789";
var useSpecialChara = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";

var passwordLength;
var uperCase;
var number;
var specialCharacter;

//this will make the "generate Password" work when you click on it. it will take to to a set of promts
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//my first FUNCTION. lets write a function to determin the length of the password. this took me way to long to write.
//call function length
//if your reading this please note that JavaScript take the fUN out of FUNctions.
function length() {
  passwordLength = prompt(
    "Select password lentght. Password must be a minimum of 8 and a maximum of 128 characters. :)"
  );
  if (passwordLength < 8) {
    alert(
      "Password cant be less then 8 characters long. Please select a number of characters in your password that is greater then 8 and lesser then 128"
    );
    length();
  }
  else if (passwordLength > 128) {
    alert(
      "Password to long. Please seelct a number of password characters that is less then 128 characters"
    );
    length();
  } else if (isNaN(passwordLength)) {
    alert("Not a Number. Please select a number from 8 to 128");
    length();
  }
  return passwordLength;
}
//execute function length
length();
//i think that is good for the first function

//lets duplicate the above function and make it work for uppercase etc.
function funUpperCase() {
  uperCase = prompt(
    "Would you like to use upper case characters in your password? Type: Yes or No"
  );

  if (uperCase === null || uperCase === "") {
    alert("Please type: Yes or No ");
    funUpperCase();
  }
  //yes i could of writen out all the o
  else if (
    uperCase === "yes" ||
    uperCase === "y" ||
    uperCase === "Yes" ||
    uperCase === "YES" ||
    uperCase === "Y"
  ) {
    uperCase = true;
    return uperCase;
  } else if (
    uperCase === "no" ||
    uperCase === "n" ||
    uperCase === "N" ||
    uperCase === "NO" ||
    uperCase === "No"
  ) {
    uperCase = false;
    return uperCase;
  } else {
    alert("Please type: Yes or No ");
    funUpperCase();
  }
  return uperCase;
}
funUpperCase();

//Function for lower case
function functionLowerCase() {
  useLowerCase = prompt(
    "Would you like to use lower case characters in your password. Type: Yes or No"
  );

  if (useLowerCase === null || useLowerCase === "") {
    alert("Please type in yes or no ");
    functionLowerCase();
  } else if (
    useLowerCase === "yes" ||
    useLowerCase === "y" ||
    useLowerCase === "Yes" ||
    useLowerCase === "YES" ||
    useLowerCase === "Y"
  ) {
    useLowerCase = true;
    return useLowerCase;
  } else if (
    useLowerCase === "no" ||
    useLowerCase === "n" ||
    useLowerCase === "N" ||
    useLowerCase === "No" ||
    useLowerCase === "NO"
  ) {
    useLowerCase = false;
    return useLowerCase;
  } else {
    alert("Please type: Yes or No ");
    functionLowerCase();
  }
  return useLowerCase;
}
functionLowerCase();
//END Function for LowerCase

//FUNCTION for NUMBERS
function functionNumbers() {
  number = prompt("Would you like your password to contain numbers?");

  if (number === null || number === "") {
    alert("Please type: Yes or No ");
    functionNumbers();
  } else if (
    number === "yes" ||
    number === "y" ||
    number === "YES" ||
    number === "Yes" ||
    number === "Y"
  ) {
    number = true;
    return number;
  } else if (
    number === "no" ||
    number === "n" ||
    number === "N" ||
    number === "NO" ||
    number === "No"
  ) {
    number = false;
    return number;
  } else {
    alert("Please type: Yes or No ");
    functionNumbers();
  }
  return number;
}
functionNumbers();
//End Function for Numbers

//FUNCTION for Special Characters
function functionSpecialCharacters() {
  specialCharacter = prompt(
    "Would you like your password to use special characters? Type: Yes or No "
  );
  if (specialCharacter === null || specialCharacter === "") {
    alert("Please type: Yes or No ");
    functionSpecialCharacters();
  } else if (
    specialCharacter === "yes" ||
    specialCharacter === "y" ||
    specialCharacter === "Y" ||
    specialCharacter === "Yes" ||
    specialCharacter === "YES"
  ) {
    specialCharacter = true;
    return specialCharacter;
  } else if (
    specialCharacter === "no" ||
    specialCharacter === "n" ||
    specialCharacter === "N" ||
    specialCharacter === "NO" ||
    specialCharacter === "No"
  ) {
    specialCharacter = false;
    return specialCharacter;
  } else {
    alert("Please type: Yes or No");
    functionSpecialCharacters();
  }
  return specialCharacter;
}

//END Function for Special Character

//so i got my functions and input, how do i take the input and move on

//FUNCTION to generate password 
function generatePassword() {

  length();
  console.log(passwordLength);

  funUpperCase();
  console.log(uperCase);

 
  functionLowerCase();
  console.log(useLowerCase);
  
  functionNumbers();
  console.log(number);

  functionSpecialCharacters();
  console.log(specialCharacter);

  var characters = useLowerCase;
  var password = "";

  //now we need to write out the if statments . so if upper and number and lower and sceptial char ...then./// used help form code i found on line at https://github.com/jamierachael/Password-Generator/blob/master/script.js

  if (uperCase && number && specialCharacter) {
    characters += useUpperCase + useNumbers;
  } else if (uperCase && number) {
    characters += useUpperCase + useNumbers;
  } else if (number && specialCharacter) {
    characters += useNumbers + usespecialChara;
  } else if (uperCase && specialCharacter) {
    characters += useUpperCase + usespecialChara;
  } else if (uperCase) {
    characters += useUpperCase;
  } else if (number) {
    characters += useNumbers;
  } else if (specialCharacter) {
    characters += usespecialChara;
  } else {
    characters === useLowerCase;
  }

  //wrote this with the help of a classmate and TA. i could not make i+1 work, but found i++ did the trick
  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
passwordText.value = password;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
