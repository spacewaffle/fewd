
function compare() {
  console.log("comparing...");
  var comparison;
  var a = parseInt(document.getElementById('a').value, 10);
  var b = parseInt(document.getElementById('b').value, 10);

  console.log(a + " " + b);
 
  if (a < b) {
    comparison = '<';
  } else if (a > b) {
    comparison = '>';
  } else if (a === b) {
    comparison = '===';
  } else{
    comparison = 'N/A';
  }
  console.log("comparison is " + comparison);
 document.getElementById('comparison').innerHTML = comparison;
}

document.getElementById('submit').onclick = compare;