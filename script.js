// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var upCase = ["Q", "W", "E", "R", "T", "Y", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numCase = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symCase = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "'", '"', ",", "<", ".", ">", "/", "?"]

var chooseLength = 0;
var randLength = 0;
var password = '';


// Write password to the #password input
function writePassword() {
  password = "";
  passwordText = '';
  randLength = 0;
  var pickCase = [];

  //function for random Math
function generatePassword(){
  console.log("pickcase.length " + pickCase.length);
  console.log("rand length " + randLength);
  for (var i = 0; i < chooseLength; ++i){
    var c = Math.floor(Math.random()*randLength);
    password += pickCase[c];
    console.log(pickCase[c]);
    console.log("c " + c);
  }
  return password;
}

  // length 8-128
  chooseLength = prompt("How long would you like your password to be?\nYou may pick between 8-128 characters.");
  if (chooseLength >= 8 && chooseLength <= 128) {

    // Lowercase?
    if (confirm("Would you like your password to contain lowercase characters?")) {
      pickCase = pickCase.concat(lowCase);
      randLength = randLength + 26;
    }
    // Uppercase?
    if (confirm("Would you like your password to contain uppercase characters?")) {
      pickCase = pickCase.concat(upCase);
      randLength = randLength + 26;
    }
    // Numbers?
    if (confirm("Would you like your password to contain numbers?")) {
      pickCase = pickCase.concat(numCase);
      randLength = randLength + 10;
    }
    // Symbols?
    if (confirm("Would you like your password to contain any special characters?")) {
      pickCase = pickCase.concat(symCase);
      randLength = randLength + 32;
    }
    // in the event no characters were picked
    if (randLength === 0) {
      alert("I'm sorry, you must choose at least one character type.");
    }

  }
  else {
    alert("you must pick a number between 8-128");
  }
  var password = generatePassword();
  var passwordText = document.getElementById("password");
  passwordText.value = password;
}









// console.log(pickCase)
// console.log("randLength " + randLength);
// console.log("chooseLength " + chooseLength);


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


