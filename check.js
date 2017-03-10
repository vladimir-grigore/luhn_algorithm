function check(number) {
  //convert number into string and split it into an array
  var num = ("" + number).split('');

  //traverse array from right to left
  for (var i = num.length - 1; i >= 0; i--) {
    console.log(num[i])
  }
}

check(79927398713)