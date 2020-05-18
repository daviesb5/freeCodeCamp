function rot13(str) {
    console.log("~str: " + str);
    // variables
    var curChar = "";
    var newChar = "";
    var normalArray = [];
    var cipherArray = [];
    // setArrays(normalArray, cipherArray);
    // cycles through characters
    for (var i = 0; i < str.length; i++) {
        curChar = str[i];
        console.log("curChar: " + curChar);
        newChar = convertChar(curChar);
        console.log(">>> newChar: " + newChar);
    }
    return str;
}

function convertChar(thisChar) {
    var checkThisChar = thisChar;
    var numCode = "";
    // check for A-Z range
    var isLetter = Boolean(checkForLetters(checkThisChar));
    if (isLetter == false) {
        // console.log("No changes needed.");
        return thisChar;
    }
    // Get ASCII Key
    numCode = dialThatCipher(thisChar);
    console.log("numCode: " + numCode);
}

function checkForLetters(thisChar) {
    var isTrue = Boolean(false);
    var curChar = thisChar;
    var letterRange = /[A-Z]/g;
    var matchLetter = curChar.match(letterRange);
    // returns true or false
    if (curChar == matchLetter) {
        isTrue = true;
    } else {
        isTrue = false;
    }
    // console.log("isTrue: " + isTrue);
    return isTrue;
}

function dialThatCipher(thisChar) {
    // variables
    var cipherDif = 13;
    var reroundChar = 26;
    var upperCaseMin = 65;
    var oldNumCode = 0;
    var newNumCode = 0;
    // conversion
    oldNumCode = thisChar.charCodeAt(0);
    newNumCode = oldNumCode - cipherDif;
    // Enforces ASCII Character Range: 65-90
    if (newNumCode >= upperCaseMin) {
        newNumCode = newNumCode;
        console.log("(+) newNumCode: " + newNumCode);
    } else {
        newNumCode = newNumCode + reroundChar;
        console.log("(!) newNumCode: " + newNumCode);
    }
    return newNumCode;
}

rot13("SERR PBQR PNZC");
