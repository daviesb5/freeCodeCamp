function rot13(str) {
    console.log("~str: " + str);
    // variables
    var curChar = "";
    var newChar = "";
    var normalArray = [];
    var cipherArray = [];
    // references function for arrays
    setArrays(normalArray, cipherArray);
    // cycles through characters
    for (var i = 0; i < str.length; i++){
      curChar = str[i];
      console.log("curChar: " + curChar);
      newChar = convertChar(curChar);
      console.log("newChar: " + newChar);
    }
    return str;
  }
  
  // Sets arrays to a-z and A-Z
  function setArrays(normalArray, cipherArray){
    // variables
    var numOfLetters = 26;
    var upperCaseChar = 65; 
    var upperCaseMax = 90;
    // var lowerCaseChar = 97;
    // var lowerCaseMax = 122;
    // assigns letters
    for (var i = 0, upperCaseChar = 65; i < numOfLetters; i++, upperCaseChar++){
      var cipherDif = 13;
      var cipherChar = upperCaseChar + cipherDif;
      // stays within ASCII Characters 65-90
      if (cipherDif <= upperCaseMax){
        cipherChar = cipherChar;
      } else {
        cipherChar = cipherChar - cipherDif;
      }
      // adds characters to arrays
      normalArray[i] = char("&#" + upperCaseChar);
      console.log("normalArray[i]: " + normalArray[i]);
    }
  }
  
  function convertChar(thisChar){
    
  }
  
  rot13("SERR PBQR PNZC");
  