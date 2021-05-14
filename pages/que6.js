function sum() {

  var n = parseInt(document.getElementById("num").value);
  var reverse = 0;
  while (n > 0) {

    reverse = (reverse * 10) + (n%10);
    n = (n - (n % 10))/10;

  }document.getElementById("out").innerHTML = reverse ;

}
