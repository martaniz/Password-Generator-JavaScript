// Assignment Code
var generateBtn = document.querySelector("#generate");

//lets write out our varibles 

var useLowerCase = "abcdefghijklmnopqrstuvwxyz";
var useUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var useNumbers = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"


var howLongIsThePassword;
var uperCase;
var number;
var specialCharacter;

//first we need to determin the lenght of the password. I tried many different ways to make the character lenght work and pysicaly typing in the length of the characters some how works


function determineLength(){
  howLongIsThePassword = prompt("Chose password length. Type in a number between 8-128");

    if (howLongIsThePassword<00000008){
      alert("Password must be longer then 8 characters");
      determineLength();
    }else if (howLongIsThePassword>99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999){
      alert("Password can' be longer the 128 characters");
      determineLength();
    }else if (isNaN(howLongIsThePassword)){
      alert("Please choose a password length between 8-128 characters");
      determineLength();
    }  
    return howLongIsThePassword;
}

//Function used to determine whether the user wants to include uppercase characters in the password
// code inspierd by https://github.com/anissa1908/Homework-3-Password-Generator/blob/master/script.js

function determineUppercase(){
  uperCase = prompt("Would you like your password to include upper case? \n(Yes or No)");
    uperCase = uperCase.toLowerCase();

    if (uperCase === null || uperCase === ""){
      alert("Please type in Yes or No");
      determineUppercase();

    }else if (uperCase === "yes" || uperCase ==="y" 
    || uperCase === "Yes" || uperCase === "YES" || uperCase === "Y"){
      uperCase = true;
      return uperCase;

    }else if (uperCase === "no" || uperCase ==="n" || uperCase === "NO" || uperCase === "N" || "No"){
      uperCase = false;
      return uperCase;
    
    }else {
      alert("Please type Yes or No");
      determineUppercase();
    }
    return uperCase;
}

//this funcition will determin if the user wants to use numbers 
function determineNumbers(){
  number = prompt("Would you like your password to include numbers? \n(Yes or No)");
    number = number.toLowerCase();

    if (number === null || number === ""){
      alert("Please type Yes or No");
      determineNumbers();

    }else if (number === "yes" || number ==="y" || number === "Yes" || number === "Y"){
      number = true;
      return number;

    }else if (number === "no" || number ==="n" || "No" || number === "NO"){
      number = false;
      return number;
    
    }else {
      alert("Please type Yes or No");
      determineNumbers();
    }
    return number;
}

//Would the user like to use special characters 
function determineSpecial(){
  specialCharacter = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialCharacter = specialCharacter.toLowerCase();

    if (specialCharacter === null || specialCharacter === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCharacter === "yes" || specialCharacter ==="y"){
      specialCharacter = true;
      return specialCharacter;

    }else if (specialCharacter === "no" || specialCharacter ==="n"){
      specialCharacter = false;
      return specialCharacter;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCharacter;
}
