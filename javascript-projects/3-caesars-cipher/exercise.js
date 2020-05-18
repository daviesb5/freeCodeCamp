function rot13(str) {
    console.log("~str: " + str);
    // variables
    var curChar = "";
    var convertedChar = "";
    var newString = "";
    // setArrays(normalArray, cipherArray);
    // cycles through characters
    for (var i = 0; i < str.length; i++){
      curChar = str[i];
      // console.log("curChar: " + curChar);
      convertedChar = convertChar(curChar);
      // console.log("convertedChar: " + convertedChar);
      newString = newString + convertedChar;
      console.log(">>> newString: " + newString)
    }
    return newString;
  }
  
  function convertChar(thisChar){
    var checkThisChar = thisChar;
    var numCode = "";
    // check for A-Z range
    var isLetter = Boolean(checkForLetters(checkThisChar));
    if (isLetter == false){
      // console.log("No changes needed.");
      return thisChar;
    }
    // Get ASCII Key
    numCode = dialThatCipher(thisChar);
    console.log("numCode: " + numCode);
    // Chooses Letter based on ASCII Code
    var newChar = String.fromCharCode(numCode);
    console.log(">>> newChar: " + newChar);
    return newChar;
  }
  
  function checkForLetters(thisChar){
    var curChar = thisChar;
    var letterRange = /[A-Z]/g;
    var matchLetter = curChar.match(letterRange);
    // returns true or false
    if (curChar == matchLetter){
      return true;
    } else {
      return false;
    }
  }
  
  function dialThatCipher(thisChar){
    // variables
    var cipherDif = 13;
    var reroundChar = 26;
    var upperCaseMin = 65;
    var oldNumCode = 0;
    var newNumCode = 0;
    /*
    var numCode;
    var asciiRange = /[65-90]/g;
    */
    // conversion
    oldNumCode = thisChar.charCodeAt(0);
    newNumCode = oldNumCode - cipherDif;
    // Enforces ASCII Character Range: 65-90
    if (newNumCode >= upperCaseMin){
      newNumCode = newNumCode;
      console.log("(+) newNumCode: " + newNumCode);
    } else {
      newNumCode = newNumCode + reroundChar;
      console.log("(!) newNumCode: " + newNumCode);
    }
    return newNumCode;
  }
  
  rot13("SERR PBQR PNZC");
  