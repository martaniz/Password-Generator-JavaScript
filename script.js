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
   alert("to short");
   length();
 } else if (passwordLength >  9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999) {
   alert("to long");
   length();
 } else if (isNaN(passwordLength)){
  alert("PNANgths");
  length();
}    
return passwordLength;
 }
//execute function length
length();
//i think that is good for the first function 

//lets duplicate the above function and make it work for uppercase etc.


function funUpperCase() {
  useUpperCase = prompt("use upper");

  if (useUpperCase === null || useUpperCase === ""){
    alert("please chose y n");
    funUpperCase();
  }

  else if (useUpperCase === "yes" || useUpperCase === "y") {
    useUppeCase = true;
    return useUpperCase;
  }


  else if (useUpperCase === "no" || useUpperCase === "n" || useUpperCase === "N") {
    useUpperCase = false;
    return useUpperCase;
  }
else {
  alert("chose y n");
 funUpperCase();
}




return useUpperCase;
}

funUpperCase();



function functionLowerCase() {
  useLowerCase = prompt("use lower");

  if (useLowerCase === null || useLowerCase === ""){
    alert("please chose y n");
    functionLowerCase();
  }

  else if (useLowerCase === "yes" || useLowerCase === "y") {
    useLowerCase = true;
    return useLowerCase;
  }


  else if (useLowerCase === "no" || useLowerCase === "n" || useLowerCase === "N") {
    useLowerCase = false;
    return useLowerCase;
  }
else {
  alert("chose y n");
  functionLowerCase();
}




return useLowerCase;
}

functionLowerCase();




function functionNumbers() {
  useNumbers = prompt("use numberr");

  if (useNumbers === null || useNumbers === ""){
    alert("please chose y n");
    functionNumbers();
  }

  else if (useNumbers === "yes" || useNumbers === "y") {
    useNumbers = true;
    return useNumbers;
  }


  else if (useNumbers === "no" || useNumbers === "n" || useNumbers === "N") {
    useNumbers = false;
    return useNumbers;
  }
else {
  alert("chose y n");
  functionNumbers();
}




return useNumbers;
}

functionNumbers();





function functionSpecialCharacters() {
  specialChar = prompt("use special char");

  if (specialChar === null || specialChar === ""){
    alert("please chose y n");
    functionSpecialCharacters();
  }

  else if (specialChar === "yes" || specialChar === "y") {
    specialChar = true;
    return specialChar;
  }


  else if (specialChar === "no" || specialChar === "n" || specialChar === "N") {
    specialChar = false;
    return specialChar;
  }
else {
  alert("chose y n");
  functionSpecialCharacters();
}




return specialChar;
}

functionSpecialCharacters();



// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
