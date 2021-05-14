function sum(){
  var n = parseInt(document.getElementById("num").value);

  var sum=0;
  var x;
  while(n>0)
  {
    x = n%10;
    n = (n-x)/10;

    sum = sum+x;
  } document.getElementById("out").innerHTML=sum;
}
