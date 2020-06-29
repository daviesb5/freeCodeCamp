function telephoneCheck(str) {
    console.log("~str: " + str);
    // sets value to false by default
    var isValid = Boolean(false);
    var newPhone = "";
    //sorts number
    newPhone = reformatPhoneNum(str);
    //evaluates reformated number
    isValid = phoneNumResult(str);
    // returns value
    return isValid;
  }
  
  // formats telephone number
  function reformatPhoneNum(curPhoneNum){
    // important values
    var newDigit = "";
    var digitsOnly = "";
    // only accepts digits
    for (var i = 0; i < curPhoneNum.length; i++){
      newDigit = curPhoneNum[i];
      console.log("curPhoneNum[i]: " + curPhoneNum[i]);
      newDigit = determineChar(newDigit);
      digitsOnly = digitsOnly + newDigit;
      console.log("digitsOnly: " + digitsOnly);
    }
  }
  
  // determines the character
  function determineChar(curChar){
    // important values
    var numSet =/[0-9]/g;
    var matchNum = curChar.match(numSet);
    if (curChar == matchNum){
      return curChar;
    } else {
      return "";
    }
  }
  
  //
  function phoneNumResult(newPhoneNum){
    //checks length
    if (newPhoneNum.length < 7){
      return false;
    } else if (newPhoneNum.length < 7)
  }
  
  // input
  telephoneCheck("555-555-5555");