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
        console.log("newChar before edit: " + newChar);
        // uses function to check for letters
        newChar = stringCleaning(newChar);
        // adds newChar to new strings
        pureStr = pureStr + newChar;
        reversedWord = newChar + reversedWord;

    }
    wordMatch = compareWords(pureStr, reversedWord);
    console.log(">>> wordMatch: " + wordMatch);
    return wordMatch;
}

function stringCleaning(thisChar) {
    var letterRange = /[a-z]/g;
    var matchLetter = thisChar.match(letterRange);
    if (matchLetter == thisChar) {
        // console.log("(+) thisChar: " + thisChar);
        return thisChar;
    } else {
        // console.log("(-) thisChar: " + thisChar);
        return "";
    }
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
