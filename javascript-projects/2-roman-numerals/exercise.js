function convertToRoman(num) {
  console.log("~num: " + num);
  // variables
  var arabicNumerals = num.toString();
  var arabicDigits = [];
  var curRomanNumeral = "";
  var romanNumerals = "";
  var nthPower = 0;
  // splits #s into digits & converts whole #s
  for (var i = (arabicNumerals.length - 1); i >= 0; i--, nthPower++){
    // console.log("i: " + i);
    // console.log("nthPower: " + nthPower);
    // console.log("arabicNumerals[i]: " + arabicNumerals[i]);
    // var isZero = checkForZero(arabicNumerals[i]);
    // if (isZero == False){
    //   curRomanNumeral = arabicToRoman(arabicNumerals[i], nthPower);
    // } else {
    //   curRomanNumeral = "";
    // }
    curRomanNumeral = arabicToRoman(arabicNumerals[i], nthPower);
    // console.log("> romanNumerals: " + romanNumerals);
    // console.log("> curRomanNumeral: " + curRomanNumeral);
    // updates roman #, starting @ ones place
    romanNumerals = curRomanNumeral + romanNumerals;
    // console.log("curRomanNumeral: " + curRomanNumeral);
    console.log("romanNumerals: " + romanNumerals);
  }
  console.log(">>> final romanNumerals: " + romanNumerals);
  return romanNumerals;
}

// checks for 0
function checkForZero(modernNum){
  if (modernNum == "0"){
    return True;
  } else if (modernNum == 0){
    return True;
  } else {
    return False;
  }
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
  console.log ("newRomanNumeral: " + newRomanNumeral);
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

function hundredsPlace(thisDigit){
  var newRomanNumeral = "";
  if (thisDigit == "100"){
    newRomanNumeral = "C"
  } else if (thisDigit == "200"){
    newRomanNumeral = "CC"
  } else if (thisDigit == "300"){
    newRomanNumeral = "CCC"
  } else if (thisDigit == "400"){
    newRomanNumeral = "CD"
  } else if (thisDigit == "500"){
    newRomanNumeral = "D"
  } else if (thisDigit == "600"){
    newRomanNumeral = "DC"
  } else if (thisDigit == "700"){
    newRomanNumeral = "DCC"
  } else if (thisDigit == "800"){
    newRomanNumeral = "DCCC"
  } else if (thisDigit == "900"){
    newRomanNumeral = "CM"
  }
  return newRomanNumeral;
}

function thousandsPlace(thisDigit){
  var newRomanNumeral = "";
  if (thisDigit == "1000"){
    newRomanNumeral = "M"
  } else if (thisDigit == "2000"){
    newRomanNumeral = "MM"
  } else if (thisDigit == "3000"){
    newRomanNumeral = "MMM"
  } else if (thisDigit == "4000"){
    newRomanNumeral = "MV̄"
  } else if (thisDigit == "5000"){
    newRomanNumeral = "V̄"
  } else if (thisDigit == "6000"){
    newRomanNumeral = "V̄M"
  } else if (thisDigit == "7000"){
    newRomanNumeral = "V̄MM"
  } else if (thisDigit == "8000"){
    newRomanNumeral = "V̄MMM"
  } else if (thisDigit == "9000"){
    newRomanNumeral = "MX̄"
  }
  return newRomanNumeral;
}

convertToRoman(36);
