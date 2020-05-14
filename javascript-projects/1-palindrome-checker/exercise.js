function palindrome(str) {
    console.log("~str: " + str);
    // Values
    var pureStr = str;
      var reversedWord = "";
      var newChar = "";
      var wordLength = 0;
      var wordMatch = Boolean(false);
      wordLength = str.length;
      // Cleans original string
      pureStr = stringCleaning(pureStr);
      // Creates reverse spelling
      for (var i = str.length; i > 0; i--) {
          newChar = str[i - 1];
          // console.log("newChar: " + newChar);
          reversedWord = sortNewChar(reversedWord, newChar);
      }
      wordMatch = compareWords(str, reversedWord);
      console.log(">>> wordMatch: " + wordMatch);
      return wordMatch;
  }
  
  function stringCleaning(pureStr){
    for (var i = 0; i < pureStr.length; i++){
      var letterRange = /[a-z]/g;
      var matchLetter = pureStr[i].match(letterRange);
      if (matchLetter == ""){
        
      }
    }
  }
  
  /*
  FIX THIS
  */
  function sortNewChar(changedWord, thisChar) {
      // console.log(":?: reversedWord: " + reversedWord);
      // console.log(":?: thisChar: " + thisChar);
      var letterRange = /[a-z]/g;
      var matchLetter = thisChar.match(letterRange);
      if (thisChar == matchLetter) {
          changedWord = changedWord + thisChar;
          // console.log("(+) reversedWord: " + reversedWord);
      } else {
          changedWord = changedWord;
          // console.log("(-) reversedWord: " + reversedWord);
      }
      return changedWord;
  }
  
  function compareWords(oldWord, newWord) {
    console.log("oldWord: " + oldWord);
    console.log("newWord: " + newWord);
      if (newWord == oldWord) {
          return true;
      } else {
          return false;
      }
  }
  
  palindrome("eye");
  