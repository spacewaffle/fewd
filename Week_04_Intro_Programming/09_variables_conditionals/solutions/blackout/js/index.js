document.getElementById("light_switch").onclick = switchLight;

var blah = 1;

function switchLight(){

  if(blah == 1){
    blah = 0;
    document.getElementById("container").style.backgroundColor = "black";
  }
  else{
    blah = 1;
    document.getElementById("container").style.backgroundColor = "white";
  }
  console.log("switching the lights...");
}