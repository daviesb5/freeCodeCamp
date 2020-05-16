function convertToRoman(num) {
    // var arabicNumerals = num.toString();
    var arabicDigits = [];
    var curRomanNumeral = "";
    var romanNumerals = "";
    var nthPower = 0;
    for (var i = 0; i < arabicNumerals.length; i++){
      console.log("num: " + num);
      // if (arabicNumerals[i] == "0"){
      //   console.log(">>> arabicNumerals[i]: " + arabicNumerals);
      //   return "";
      // }
      // 10^0 = 1, 10^1 = 10, 10^2 = 100
      nthPower = i;
      console.log("nthPower: " + nthPower);
      // function for numeral conversion
      curRomanNumeral = arabicToRoman(arabicNumerals[i], nthPower);
      romanNumerals = romanNumerals + curRomanNumeral;
    }
   return romanNumerals;
  }
  
  convertToRoman(36);
  
  function arabicToRoman(modernNum, nthPower){
    var newDigit = "";
    var newRomanNumeral = "";
    if (nthPower == 0){
      newDigit = modernNum;
      // 1-9
      newRomanNumeral = onesPlace(newDigit);
    } else if (nthPower == 1){
      newDigit = modernNum + "0";
      // 10s place
      newRomanNumeral = tensPlace(newDigit);
    } else if (nthPower == 2){
      newDigit = modernNum + "00";
      // 100s place
      newRomanNumeral = hundredsPlace(newDigit);
    } else if (nthPower == 3){
      newDigit = modernNum + "000";
      // 1000s place
      newRomanNumeral = thousandsPlace(newDigit);
    } else {
      alert("Not a valid number");
    }
    return newRomanNumeral;
  }
  
  function onesPlace(thisDigit){
    var newRomanNumeral = "";
    if (thisDigit == "1"){
      newRomanNumeral = "I"
    } else if (thisDigit == "2"){
      newRomanNumeral = "II"
    } else if (thisDigit == "3"){
      newRomanNumeral = "III"
    } else if (thisDigit == "4"){
      newRomanNumeral = "IV"
    } else if (thisDigit == "5"){
      newRomanNumeral = "V"
    } else if (thisDigit == "6"){
      newRomanNumeral = "VI"
    } else if (thisDigit == "7"){
      newRomanNumeral = "VII"
    } else if (thisDigit == "8"){
      newRomanNumeral = "VIII"
    } else if (thisDigit == "9"){
      newRomanNumeral = "IX"
    } else if (thisDigit == "10"){
      newRomanNumeral = "X"
    }
    return newRomanNumeral;
  }