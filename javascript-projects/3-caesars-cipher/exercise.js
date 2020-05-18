function rot13(str) {
    console.log("~str: " + str);
    // variables
    var curChar = "";
    var newChar = "";
    var normalArray = [];
    var cipherArray = [];
    // setArrays(normalArray, cipherArray);
    // cycles through characters
    for (var i = 0; i < str.length; i++){
      curChar = str[i];
      console.log("curChar: " + curChar);
      newChar = checkForLetters(curChar);
      console.log("newChar: " + newChar);
    }
    return str;
  }
  
  /*
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
  */
  
  function convertChar(thisChar){
    // check for A-Z range
    var isLetter = checkForLetters(thisChar);
    if (isLetter == true){
      
    }
    // variables
    var cipherDif = 13;
    var reroundChar = 26;
    var upperCaseMin = 65;
    var upperCaseMax = 90;
    var oldNumCode = 0;
    var newNumCode = 0;
    var numCode = "";
    // conversion
    oldNumCode = thisChar.charCodeAt(0);
    console.log("oldNumCode: " + oldNumCode);
    newNumCode = oldNumCode - cipherDif;
    console.log("newNumCode: " + newNumCode);
    // stays within ASCII Characters 65-90
    if (oldNumCode >= upperCaseMin){
      numCode = numCode;
      console.log("(+) numCode: " + numCode);
    } else {
      numCode = numCode + reroundChar;
      console.log("(!) numCode: " + numCode);
    }
  }
  
  function checkForLetters(thisChar){
    var isTrue = Boolean(false);
    var curChar = thisChar;
    var letterRange = /[A-Z]/g;
    var matchLetter = curChar.match(letterRange);
    // returns true or false
    if (curChar == matchLetter){
      isTrue = true;
    } else {
      isTrue = false;
    }
    console.log("isTrue: " + isTrue);
  }
  
  rot13("SERR PBQR PNZC");
  