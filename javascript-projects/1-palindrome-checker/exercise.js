function palindrome(str) {
    console.log("~str: " + str);
    // Values
    var pureStr = "";
    var reversedWord = "";
    var newChar = "";
    var wordMatch = Boolean(false);
    // Creates "clean" version of original and reversed strings
    for (var i = 0; i < str.length; i++) {
        newChar = str[i];
        // console.log("newChar before edit: " + newChar);
        // uses function to check for letters
        newChar = stringCleaning(newChar);
        // adds newChar to new strings
        pureStr = pureStr + newChar;
        reversedWord = newChar + reversedWord;
        console.log("fl | pureStr: " + pureStr);
        console.log("fl | reversedWord: " + reversedWord);
    }
    wordMatch = compareWords(pureStr, reversedWord);
    console.log(">>> wordMatch: " + wordMatch);
    return wordMatch;
}

function stringCleaning(thisChar) {
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var matchLowerCase = thisChar.match(lowerCaseLetters);
    var matchUpperCase = thisChar.match(upperCaseLetters);
    // var thisCharLC = thisChar.toLowerCase();
    // console.log("~thisCharLC: " + thisCharLC);
    if (thisChar == matchLowerCase) {
        // console.log("(+) matchLowerCase: " + matchLowerCase);
        return thisChar;
    } else if (thisChar == matchUpperCase) {
        // console.log("(+) matchUpperCase: " + matchUpperCase);
        return thisChar;
    } else {
        // console.log("(-) thisChar: " + thisChar);
        return "";
    }
}

function compareWords(oldWord, newWord) {
    console.log("pureStr: " + oldWord);
    console.log("reversedWord: " + newWord);
    if (newWord == oldWord) {
        return true;
    } else {
        return false;
    }
}

palindrome("eye");