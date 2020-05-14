function palindrome(str) {
    console.log("~str: " + str);
    var originalWord = str;
    var reversedWord = "";
    var newChar = "";
    var wordLength = 0;
    wordLength = str.length;
    for (var i = str.length; i > 0; i--) {
        newChar = str[i - 1];
        // console.log("newChar: " + newChar);
        reversedWord = sortNewChar(reversedWord, newChar);
    }
    return compareWords(originalWord, reversedWord);
}

function sortNewChar(reversedWord, thisChar) {
    // console.log(":?: reversedWord: " + reversedWord);
    // console.log(":?: thisChar: " + thisChar);
    var letterRange = /[a-z]/g;
    var matchLetter = thisChar.match(letterRange);
    if (thisChar == matchLetter) {
        reversedWord = reversedWord + thisChar;
        // console.log("(+) reversedWord: " + reversedWord);
    } else {
        reversedWord = reversedWord;
        // console.log("(-) reversedWord: " + reversedWord);
    }
    return reversedWord;
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
