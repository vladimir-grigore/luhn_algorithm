function check(number) {
  //convert number into string and split it into an array
  var num = ("" + number).split('');
  var computedArray = computeCheckDigits(num);

}

function computeCheckDigits(array) {
  var resultArray = [];
  var is_check_digit = false;
  //traverse array from right to left
  for (var i = array.length - 1; i >= 0; i--) {
    //compute every other digit
    if (is_check_digit) {
      //multiply number by 2 and check if it's bigger than 9
      var multiply_by_two = array[i] * 2;
      if (multiply_by_two > 9) {
        multiply_by_two -= 9;
      }
      resultArray[i] = multiply_by_two;
      is_check_digit = false;
    } else {
      resultArray[i] = array[i];
      is_check_digit = true;
    }

  }

  return resultArray;
}

check(79927398713)