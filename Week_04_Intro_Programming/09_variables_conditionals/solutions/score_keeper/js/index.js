var num = 0;

document.getElementById("zero").onclick = clear;
document.getElementById("add5").onclick = addFive;
document.getElementById("add10").onclick = addTen;
document.getElementById("sub1").onclick = subOne;

function clear(){
  //stuff goes here!
  num = 0;
  document.getElementById("result").innerHTML = num;
  console.log("clicked zero!");
}

function addFive(){
  num = num + 5;
  document.getElementById("result").innerHTML = num;
  console.log("added 5");
}

function addTen(){
  num = num + 10;
  document.getElementById("result").innerHTML = num;
  console.log("added 10");
}

function subOne(){
  num = num - 1;
  document.getElementById("result").innerHTML = num;
  console.log("sub 1");
}


