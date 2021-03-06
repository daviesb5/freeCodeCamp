function palindrome(str) {
    console.log("~str: " + str);
    // Values
    var pureStr = "";
    var reversedWord = "";
    var newChar = "";
    var wordMatch = Boolean(false);
    var oldReversedWord = "";
    // Creates "clean" version of original and reversed strings
    for (var i = 0; i < str.length; i++) {
        newChar = str[i];
        oldReversedWord = newChar + oldReversedWord;
        // console.log("newChar before edit: " + newChar);
        // uses function to check for letters
        newChar = stringCleaning(newChar);
        // adds newChar to new strings
        pureStr = pureStr + newChar;
        reversedWord = newChar + reversedWord;
        // console.log("fl | pureStr: " + pureStr);
        // console.log("fl | reversedWord: " + reversedWord);
    }
    wordMatch = compareWords(pureStr, reversedWord, oldReversedWord);
    console.log(">>> wordMatch: " + wordMatch);
    return wordMatch;
}

/*
REMOVES SPECIAL CHARACTERS
*/
function stringCleaning(thisChar) {
    thisChar = thisChar.toLowerCase();
    var lowerCaseLetters = /[a-z]/g;
    var matchLowerCase = thisChar.match(lowerCaseLetters);
    var numberSet = /[0-9]/g;
    var matchNumber = thisChar.match(numberSet);
    // console.log("~thisCharLC: " + thisCharLC);
    if (thisChar == matchLowerCase) {
        // console.log("(+) matchLowerCase: " + matchLowerCase);
        return thisChar;
    } else if (thisChar == matchNumber){
      return thisChar;
    } else {
        // console.log("(-) thisChar: " + thisChar);
        return "";
    }
}

/*
DETERMINES IF STRINGS ARE PALINDROMES
*/
function compareWords(oldWord, newWord, oldReversedWord) {
  console.log("oldReversedWord: " + oldReversedWord);
    console.log("pureStr: " + oldWord);
    console.log("reversedWord: " + newWord);
    if (newWord == oldWord) {
        return true;
    } else {
        return false;
    }
}

palindrome("eye");
