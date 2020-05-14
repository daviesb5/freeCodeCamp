function palindrome(str) {
    var reversedWord = "";
    var newChar = "";
    var wordLength = 0;
    wordLength = str.length;
    for (var i = str.length; i > 0; i--){
      newChar = str[i - 1];
      // console.log("newChar: " + newChar);
      reversedWord = sortNewChar(reversedWord, newChar);
    }
    console.log("str: " + str);
    console.log("reversedWord: " + reversedWord);
    return compareWords(str, reversedWord);
  }
  
  function sortNewChar(reversedWord, thisChar){
    var letterRange = /[a-z]/g;
    var matchLetter = thisChar.match(letterRange);
    if (thisChar == matchLetter){
      reversedWord = reversedWord + thisChar;
      console.log("(+) reversedWord: " + reversedWord);
    } else {
      reversedWord = reversedWord;
      console.log("(-) reversedWord: " + reversedWord);
    }
    return reversedWord;
  }
  
  function compareWords(oldWord, newWord){
    if (oldWord == newWord){
      return true;
    } else {
      return false;
    }
  }
  
  palindrome("eye");
  