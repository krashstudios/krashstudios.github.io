/*
    This script takes the value of the form input (quantity of items) and multiplys it by the items price, outputting the total price.
*/

// Initial Quantity value
var input = 0;

// Function to increase total amount by quantity of items
function calcPrice() {
  // Item Variable
  var price = document.getElementById("product-price").getAttribute("price-data");
  // Get order quantity from text field
  input = document.getElementById("product-quantity-input").value;
  // Multiply quantity by item price
  document.getElementById("product-checkout-total-amount").innerHTML = (input * price).toFixed(2);
}

// Increase quantity by 1 if clicked
document.getElementById("product-quantity-add").addEventListener("click", function() {
  var increase = document.getElementById("product-quantity-input").value ++;
  calcPrice();
}, false);

// Reduce quantity by 1 if clicked
document.getElementById("product-quantity-subtract").addEventListener("click", function() {
  var reduce = document.getElementById("product-quantity-input").value --;
  
  calcPrice();
}, false);
