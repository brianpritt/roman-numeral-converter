var romanSingles = [["I","IV","V","IX"],["X","XL","L","XC"],["C","CD","D","CM"],["M"]];

function hasNumbers(numberTest) {
  return (/\d/.test(numberTest));
}

function isTranslatable(numberLength){
  if ((numberLength > 0) && (numberLength < 4000)) {
  return true;
} else {
  return false;
}
}

function looperBig(numberInput) {
  var numberArray = numberInput.split("");
  var numberArrayReverse = numberArray.reverse();
  var theFinalCountDown = [];
  for (index = 0; index < numberInput.length; index++) {
    theFinalCountDown.push(theConvertor(romanSingles[index], numberArrayReverse[index]));
  }
  theFinalCountDown = theFinalCountDown.reverse();
  theFinalCountDown = theFinalCountDown.join("");
  return theFinalCountDown;
};

function theConvertor(romanSingles, decimalArray) {
  var numeralArray = [];
  var finalNumeral=[];

    if (decimalArray < 4) {     //Begin If statements
      for (counter =0; counter <= decimalArray -1; counter++){
      numeralArray.push(romanSingles[0]);
      }
    } else if (decimalArray == 4) {
      numeralArray.push(romanSingles[1]);
    } else if ((decimalArray >= 5) && (decimalArray < 9)) {
        numeralArray.push(romanSingles[2]); {
          if (decimalArray > 5) {
            for (counter = 0; counter <= decimalArray-6; counter++){
            numeralArray.push(romanSingles[0]);
            }
          }
        }
      }
      else if (decimalArray == 9) {
        numeralArray.push(romanSingles[3]);
      }
    return (numeralArray.join(""));
}



$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var numberInput = $("input#user-input").val();
    var isNumber = hasNumbers(numberInput);
    var rightLength = isTranslatable(numberInput);

    if (isNumber === false) {
      alert("Please only use numbers");
    } else if (rightLength === false){
      alert("Enter number between 1 and 3999 only");
    } else {
      var finalResult = looperBig(numberInput);

      $("#result").text(finalResult);
      $("#output").show();
    }

  });
});
