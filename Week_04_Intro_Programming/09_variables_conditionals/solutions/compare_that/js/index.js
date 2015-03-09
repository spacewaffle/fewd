console.log("hello world!");

document.getElementById("submit").onclick = compare;



function compare(){
  console.log("thinking real hard...");
  var a = parseInt(document.getElementById('a').value);
  var b = parseInt(document.getElementById('b').value);

  if(a > b){
    document.getElementById("comparison").innerHTML = ">";
  }
  else if(a < b){
    document.getElementById("comparison").innerHTML = "<";
  }
  else if(a == b){
    document.getElementById("comparison").innerHTML = "==";
  }
  else{
    document.getElementById("comparison").innerHTML = "N/A";
  }




}