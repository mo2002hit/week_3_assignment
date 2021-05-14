function tablee() {
  var n = parseInt(document.getElementById("num").value);
  var i;
  for (i = 1; i <= 10; i++) {

    document.getElementById("new").innerHTML += (n*i)+ "<br>";

  }
}
