<!DOCTYPE html>
<html>
<body>

<p>Click the button to display the first character of the string "HELLO WORLD".</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>
<p id="demo1"></p>
<script>
function myFunction() {
  var str = "HELLO WORLD";
  
   var res=[];
  for(var i=0;i<=str.length;i++){
  res.push(str.charAt(i));
  }
 
  document.getElementById("demo").innerHTML = res;
    document.getElementById("demo1").innerHTML = str.length;

}
</script>

</body>
</html>
