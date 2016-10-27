var romanSingles = ["I","V","X"];
var decSingles = [1,5,10];

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

function theConvertor(numberInput){
  var decimalArray = numberInput.split("");
  var numeralArray = [];
  console.log(decimalArray);

  if (decimalArray < 4) {
    for (counter =0; counter <= decimalArray -1; counter++){
    numeralArray.push("I");
    }
  } else if (decimalArray === 4) {
    numeralArray.push("IV");
  } else if ((decimalArray >= 5) && (decimalArray < 9)) {
      numeralArray.push("V"); {
        if (decimalArray > 5) {
          for (counter = 0; counter <= decimalArray-6; counter++){
          numeralArray.push("I");
        }
        }
      }
    }
    else if (decimalArray === 9) {
      numeralArray.push("IX");
    }
  console.log(numeralArray);
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
      var finalResult = theConvertor(numberInput);

      $("#result").text(numberInput);
      $("#output").show();
    }

  });
});
