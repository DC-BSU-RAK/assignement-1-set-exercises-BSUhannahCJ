// defined a function in js called calculate
function calculate() {
  // pulls input of user from the ids and then converts it to decimals and if input is invalid then it shows zero
  const price = parseFloat(document.getElementById('price').value) || 0;
  const liters = parseFloat(document.getElementById('liter').value) || 0;

  // calculation part: the total is the product of price multipled by liters
  const total = price * liters;

  // selects the element of the id 'ooutput' and sets textContent to the total amount with $ andtwo decimal places
  document.getElementById('output').textContent = `$${total.toFixed(2)}`;
}

  