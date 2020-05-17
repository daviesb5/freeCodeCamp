function convertToRoman(num) {
  console.log("~num: " + num);
  // variables
  var arabicNumerals = num.toString();
  var arabicDigits = [];
  var curRomanNumeral = "";
  var romanNumerals = "";
  var nthPower = 0;
  // splits #s into digits & converts whole #s
  for (var i = (arabicNumerals.length - 1); i >= 0; i--){
    console.log("i: " + i);
    console.log("nthPower: " + nthPower);
    console.log("arabicNumerals[i]: " + arabicNumerals[i]);
    curRomanNumeral = arabicToRoman(arabicNumerals[i], nthPower);
    // updates roman #, starting @ ones place
    romanNumerals = romanNumerals + curRomanNumeral;
    console.log("curRomanNumeral: " + curRomanNumeral);
    console.log("romanNumerals: " + romanNumerals);
  }
  return romanNumerals;
}

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
  }
  return newRomanNumeral;
}

function tensPlace(thisDigit){
  var newRomanNumeral = "";
  if (thisDigit == "10"){
    newRomanNumeral = "X"
  } else if (thisDigit == "20"){
    newRomanNumeral = "XX"
  } else if (thisDigit == "30"){
    newRomanNumeral = "XXX"
  } else if (thisDigit == "40"){
    newRomanNumeral = "XL"
  } else if (thisDigit == "50"){
    newRomanNumeral = "L"
  } else if (thisDigit == "60"){
    newRomanNumeral = "LX"
  } else if (thisDigit == "70"){
    newRomanNumeral = "LXX"
  } else if (thisDigit == "80"){
    newRomanNumeral = "LXXX"
  } else if (thisDigit == "90"){
    newRomanNumeral = "XC"
  }
  return newRomanNumeral;
}

convertToRoman(36);
