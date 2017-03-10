function check(number) {
  //convert number into string and split it into an array
  var num = ("" + number).split('');
  var computedArray = computeCheckDigits(num);
  var checkSum = sumCheckDigits(computedArray)
  var checkDigit = (checkSum * 9) % 10;

  //return true if the last digit matched the calculated check digit
  return (checkDigit === Number(num[num.length-1]));
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

      //when the sum of 2 numbers is bigger than 9, substract 9
      if (multiply_by_two > 9) {
        multiply_by_two -= 9;
      }

      resultArray[i] = multiply_by_two;
      is_check_digit = false;
    } else {
      //every other digit should remain the same
      resultArray[i] = array[i];
      is_check_digit = true;
    }
  }
  return resultArray;
}

function sumCheckDigits(array) {
  var checkSum = 0;

  //Add all the digits except the last one
  for (var i = array.length - 2; i >= 0; i--) {
    checkSum += Number(array[i])
  }
  return checkSum;
}

module.exports = check;