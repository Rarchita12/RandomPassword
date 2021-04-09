// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var specialChars = ['\u0020','\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E'];
var numericalChars =['0','1','2','3','4','5','6','7','8','9'];
var lowercaseChars = [];


// Write password to the #password input
function writePassword() {
  
 var totalChars = window.prompt("How many characters would you like your password to contain?");
 if(totalChars<8 || totalChars>128){
   window.alert("Password must be at least 8 characters and no more than 128 characters.");
 }
 else{
   var specialChars = window.confirm("Click OK to confirm including special characters.");
   var numChars = window.confirm("Click OK to confirm including numerical characters. ");
   var lowerChars = window.confirm("Click OK to confirm including lowercase characters. ");
   var upperChars = window.confirm("Click OK to confirm including uppercase characters. ");
   

   if(specialChars === false && numChars === false && lowerChars === false && upperChars ===false){
          
   }
   var password = generatePassword();
 }
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(totalChars, specialChars, numChars, lowerChars, upperChars){
var password = " ";
var selectionsArray = [];
for(var i =0; i<totalChars; i++){

}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
