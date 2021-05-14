function sum() {

  var n1 = parseInt(document.getElementById("num1").value);
  var n2 = parseInt(document.getElementById("num2").value);
  var b = parseInt(n2 * (n2 - 1) / 2);
  var a = parseInt(n1 * (n1 + 1) / 2);
  var y = parseInt(n1 * (n1 - 1) / 2);
  var x = parseInt(n2 * (n2 + 1) / 2);


  if(n1<n2){
    var result = parseInt(b-a);
    document.getElementById("out").innerHTML = result;
  }
  else{
    var result1=parseInt(y-x);
    document.getElementById("out").innerHTML = result1;
  }
}
