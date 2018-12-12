function divideSaleTotals(itemTotal) {
  var itemCost = itemTotal / 2;
  var taxes = itemCost * .3;
  var tenPercent = (itemCost - taxes) * .1;
  var profit = itemCost - taxes - (tenPercent * 2);

  var itemCostOutput = document.getElementById('itemCost');
  itemCostOutput.innerHTML = '$' + itemCost.toFixed(2);

  var taxesOutput = document.getElementById('taxes');
  taxesOutput.innerHTML = '$' + taxes.toFixed(2);

  var savingsOutput = document.getElementById('savings');
  savingsOutput.innerHTML = '$' + tenPercent.toFixed(2);

  var charityOutput = document.getElementById('charity');
  charityOutput.innerHTML = '$' + tenPercent.toFixed(2);

  var profitsOutput = document.getElementById('profits');
  profitsOutput.innerHTML = '$' + profit.toFixed(2);

}
