// Assignment code here
// lets write out some varibles 

var useLowerCase = "abcdefghijklmnopqrstuvwxyz";
var useUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var useNumbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9];
var useSpecialChara = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"


var passwordLength;
var uperCase;
var number;
var specialCharacter;

//this will make the "generate Password" work when you click on it. it will take to to a set of promts
var generateBtn = document.querySelector("#generate");


//my first FUNCTION. lets write a function to determin the length of the password. this took me way to long to write.
//if your reading this please note that JavaScript take the fUN out of FUNctions.
function length() {
passwordLength = prompt("Select password lentght. Password must be a minimum of 8 and a maximum of 128 characters. :)");

//my logic on generating 8 or more caracter password. it actualy works and im suprised. lol
  if (passwordLength < 00000008){
    alert("Password cant be less then 8 characters long. Please select a number of characters in your password that is greater then 8 and lesser then 128");
    length();
  } 

 //i must be missing somthing but the only logical way i could write this out was to actualy write out the numbers of characters (128) in this way. im sure there is a correct way somwher out there but i could not find it
  else if (passwordLength >     9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999) {
    alert("Password to long. Please seelct a number of password characters that is less then 128 characters");
    length();
  } 
  else if (isNaN(passwordLength)){
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
  useUpperCase = prompt("Would you like to use upper case characters in your password? Type: Yes or No");

  if (useUpperCase === null || useUpperCase === ""){
    alert("Please type: Yes or No ");
    funUpperCase();
  }
  //yes i could of writen out all the o
  else if (useUpperCase === "yes" || useUpperCase === "y" || useUpperCase === "Yes" || useUpperCase === "YES" || useUpperCase === "Y" ) {
    useUppeCase = true;
    return useUpperCase;
  }
  else if (useUpperCase === "no" || useUpperCase === "n" || useUpperCase === "N" || useUpperCase === "NO" || useUpperCase === "No") {
    useUpperCase = false;
    return useUpperCase;
  }
  else {
    alert("Please type: Yes or No ");
    funUpperCase();
  }   
  return useUpperCase;
}
funUpperCase();


//Function for lower case 
function functionLowerCase() {
  useLowerCase = prompt("Would you like to use lower case characters in your password. Type: Yes or No");

  if (useLowerCase === null || useLowerCase === ""){
    alert("Please type in yes or no ");
    functionLowerCase();
  }
  else if ( useUpperCase === "yes" || useLowerCase === "y" || useUpperCase === "Yes" || useUpperCase === "YES" || useUpperCase === "Y") {
    useLowerCase = true;
    return useLowerCase;
  }
  else if (useLowerCase === "no" || useLowerCase === "n" || useLowerCase === "N" || useLowerCase === "No" || useLowerCase === "NO") {
    useLowerCase = false;
    return useLowerCase;
  }
  else {
    alert("Please type: Yes or No ");
    functionLowerCase();
  }
  return useLowerCase;
}
functionLowerCase();
//END Function for LowerCase

//FUNCTION for NUMBERS
function functionNumbers() {
  useNumbers = prompt("Would you like your password to contain numbers?");

  if (useNumbers === null || useNumbers === ""){
    alert("Please type: Yes or No ");
    functionNumbers();
  }
  else if (useNumbers === "yes" || useNumbers === "y" || useNumbers === "YES" || useNumbers === "Yes" || useNumbers === "Y") {
    useNumbers = true;
    return useNumbers;
  }
  else if (useNumbers === "no" || useNumbers === "n" || useNumbers === "N" || useNumbers === "NO" || useNumbers === "No") {
    useNumbers = false;
    return useNumbers;
  }
  else {
  alert("Please type: Yes or No ");
  functionNumbers();
  }
  return useNumbers;
}
functionNumbers();
//End Function for Numbers


//FUNCTION for Special Characters
function functionSpecialCharacters() {
  specialChar = prompt("Would you like your password to use special characters? Type: Yes or No ");
  if (specialChar === null || specialChar === ""){
    alert("Please type: Yes or No ");
    functionSpecialCharacters();
  }
  else if (specialChar === "yes" || specialChar === "y" || specialChar === "Y" || specialChar === "Yes" || specialChar === "YES") {
    specialChar = true;
    return specialChar;
  }
  else if (specialChar === "no" || specialChar === "n" || specialChar === "N" || specialChar === "NO" || specialChar === "No") {
    specialChar = false;
    return specialChar;
  }
else {
  alert("Please type: Yes or No");
  functionSpecialCharacters();
  }
  return specialChar;
}
functionSpecialCharacters();
//END Function for Special Character


//so i got my functions and input, how do i take the input and move on


 //Function used to take all the input from the previous functions and generate a password using a random number generator and 
 //the charAt method 
 function generatePassword(){

  length();
  console.log(passwordLength );

  funUpperCase();
  console.log(useUpperCase );

  functionLowerCase();
  console.log(useLowerCase );
  
  functionNumbers();
  console.log(useSpecialChara );
  functionSpecialCharacters();
  console.log(specialCharacter );

var characters = useLowerCase;
var password = "";


//now we need to write out the if statments . so if upper and number and lower and sceptial char ...then 
if (useUpperCase && useNumbers && specialCharacter){
  characters += useUpperCase + useNumbers + specialCharacter;

}else if (useUpperCase && useNumbers){
  characters += useUpperCase + useNumbers;

}else if (useNumbers && specialCharacter){
  characters += useNumbers + specialCharacter;

}else if (useUpperCase && specialCharacter){
  characters += useUpperCase + specialCharacter;

}else if (useUpperCaseuseUpperCase){
  characters += useUpperCase;

}else if(useNumbers){
  characters += useNumbers;

}else if (specialCharacter){
  characters += specialCharacter;

}else{
  characters === useLowerCase;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// function resetText(){
//   document.getElementById("password").value = "Your Secure Password";
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

