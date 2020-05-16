function convertToRoman(num) {
    var arabicNumerals = num.toString();
    var arabicDigits = [];
    var romanNumerals = "";
    var nthPower = 0;
    for (var i = arabicNumerals.length; i > 0; i--){
      if (arabicNumerals[i] == "0"){
        console.log(">>> arabicNumerals[i]: " + arabicNumerals[i]);
        return "";
      }
      // 10^0 = 1, 10^1 = 10, 10^2 = 100
      nthPower = arabicNumerals.length - i;
      console.log("nthPower: " + nthPower);
      // function for numeral conversion
      arabicToRoman(arabicNumerals[i], nthPower)
    }
   return num;
  }
  
  convertToRoman(36);
  
  function arabicToRoman(modernNum, nthPower){
    var newDigit = "";
    if (nthPower == 0){
      newDigit = modernNum;
      // 1-9
      onesPlace(newDigit);
    } else if (nthPower == 1){
      newDigit = modernNum + "0";
      // 10s place
      tensPlace(newDigit);
    } else if (nthPower == 2){
      newDigit = modernNum + "00";
      // 100s place
      hundredsPlace(newDigit);
    } else if (nthPower == 3){
      newDigit = modernNum + "000";
      // 1000s place
      thousandsPlace(newDigit);
    } else {
      alert("Not a valid number");
    }
  }
  
  function onesPlace(thisDigit){
    var newRomanNumeral = "";
    if (thisDigit == "1"){
      newRomanNumeral = "I"
    } else if (thisDigit == "1"){
      newRomanNumeral = "I"
    }
  
  }