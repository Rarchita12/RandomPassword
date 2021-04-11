// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//arrays for special, numerical,  lowercase, and uppercase characters. 
var specialChars = ['\u0020','\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E'];
var numericalChars =['0','1','2','3','4','5','6','7','8','9'];
var lowercaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Write password to the #password input
function writePassword() {
  //get password length
 var totalChars = window.prompt("How many characters would you like your password to contain?");
 //password length user validation
 if(totalChars<8 || totalChars>128){
   window.alert("Password must be at least 8 characters and no more than 128 characters.");
 }
 //prompt user with selection criteria 
 else{
   var specChars = window.confirm("Click OK to confirm including special characters.");
   var numChars = window.confirm("Click OK to confirm including numerical characters. ");
   var lowerChars = window.confirm("Click OK to confirm including lowercase characters. ");
   var upperChars = window.confirm("Click OK to confirm including uppercase characters. ");
  
//if user does not pick any selection criteria 
   if(specChars === false && numChars === false && lowerChars === false && upperChars ===false){
          window.alert("Must select at least one of the character type's for your password. Please try again by clicking generate password.");
   }
   //call generate random password
   var password = generatePassword(totalChars, specChars, numChars, lowerChars, upperChars);
 }
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

//generate random password
function generatePassword(totalChars, specChars, numChars, lowerChars, upperChars){
var passwd = " ";
var finalalert = "This was your selection criteria: ";
var selectionsArray = [];

//populate selectionsArray and ensure at least 1 of every selection made is in the password
if(specChars === true){
  selectionsArray.push(1);
  passwd = passwd.concat(specialChars[Math.floor((Math.random() * (33-0)+0))]);
  finalalert= finalalert.concat(" special characters ");
}

if(numChars === true){
  selectionsArray.push(2);
  passwd = passwd.concat(numericalChars[Math.floor((Math.random() * (10-0)+0))]);
  finalalert= finalalert.concat(" numerical characters ");
}


if(lowerChars === true){
  selectionsArray.push(3);
  passwd = passwd.concat(lowercaseChars[Math.floor((Math.random() * (26-0)+0))]);
  finalalert= finalalert.concat(" lowercase characters ");
}

if(upperChars === true){
  selectionsArray.push(4);
  passwd = passwd.concat(uppercaseChars[Math.floor((Math.random() * (26-0)+0))]);
  finalalert= finalalert.concat(" uppercase characters ");
}



//get max length of selections array
var max = selectionsArray.length;

//randomly generate the remaining characters in the password
for(var i =0; i<(totalChars-selectionsArray.length); i++){
     var select = selectionsArray[Math.floor((Math.random() * (max-0)+0))];
     
     switch(select){
       case 1:{
           passwd = passwd.concat(specialChars[Math.floor((Math.random() * (33-0)+0))]);
           break;
       }

       case 2:
         {
          passwd = passwd.concat(numericalChars[Math.floor((Math.random() * (10-0)+0))]);
          break;
         }

         case 3:
           {
            passwd = passwd.concat(lowercaseChars[Math.floor((Math.random() * (26-0)+0))]);
            break;
           }

           case 4:{
            passwd = passwd.concat(uppercaseChars[Math.floor((Math.random() * (26-0)+0))]);
            break;
           }
     }
}
//alert with selection criteria before password is viewed
finalalert= finalalert.concat( "\nThank you! Please press OK to see your randomly generated password below.");
window.alert(finalalert);

return passwd;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
