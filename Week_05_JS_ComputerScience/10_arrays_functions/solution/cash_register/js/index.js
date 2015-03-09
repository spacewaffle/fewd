var total = 0;

document.getElementById('entry').onsubmit = enter;

function enter(e) {
  e.preventDefault();
  var entry = document.getElementById('newEntry').value;
  entry = parseFloat(entry);
  currency = currencyFormat(entry);
  console.log(currency);
  
  document.getElementById('entries').insertAdjacentHTML('afterend','<tr><td></td><td>' + currency + '</td></tr>');
  
  total += entry;
  
 document.getElementById('total').innerHTML = currencyFormat(total);

 console.log("total is " + total);
  
 document.getElementById('newEntry').value = "";
}

function currencyFormat(number) {
  var currency = parseFloat(number);
  currency = currency.toFixed(2);
  currency = '$' + currency;
  return currency;
}