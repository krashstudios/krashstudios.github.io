// Initial Quantity value
var input = 0;

// Function to increase total amount by quantity of items
function calcPrice() {
  // Item Variable
  var itemPrice = document.getElementById("product-checkout-total-amount").getAttribute("price-data");
  // Get order quantity from text field
  input = document.getElementById("product-quantity-input").value;
  // Multiply quantity by item price
  document.getElementById("product-checkout-total-amount").innerHTML = input * itemPrice;
}
