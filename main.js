//Getting references to the HTML elements
const productSelect = document.getElementById('productSelect');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('totalPrice');
const placeOrderButton = document.getElementById('placeOrder');
const resetOrderButton = document.getElementById('resetOrder');
const orderSummary = document.getElementById('orderSummary');
const summaryDetails = document.getElementById('summaryDetails');
const hideSummaryButton = document.getElementById('hideSummary');

// Function to calculate and update the total price
function updateTotalPrice() {
    // Getting the price of the selected product
    const productPrice = parseFloat(productSelect.value);
    // Getting the quantity entered by the user
    const quantity = parseInt(quantityInput.value);

    // If the quantity is invalid or zero, reset the total price
    if (isNaN(quantity) || quantity <= 0) {
        totalPriceElement.textContent = "Total Price: $0.00";
        return;
    }

    // Calculating the total price
    const totalPrice = productPrice * quantity;
    // Updating the displayed total price
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

// Updating the total price when the product is selected or the quantity changes
productSelect.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

// Order submission when the user clicks "Place Order"
placeOrderButton.addEventListener('click', function() {
    // Getting the quantity entered by the user
    const quantity = parseInt(quantityInput.value);

    // Ensure the quantity is valid before proceeding
    if (isNaN(quantity) || quantity <= 0) {
        alert("Oops! Please enter a valid quantity (greater than 0).");
        return;
    }

    // Getting the selected product's name for the summary
    const selectedProduct = productSelect.options[productSelect.selectedIndex].text;
    // Retrieving the total price from the displayed text
    const totalPrice = totalPriceElement.textContent;

    // Display the order summary to the user
    summaryDetails.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: ${totalPrice}`;
    orderSummary.style.display = 'block'; // Show the summary section
});

// Reset the form and total price when the user clicks "Reset"
resetOrderButton.addEventListener('click', function() {
    // To Reset the product selection to the first product
    productSelect.selectedIndex = 0; 
    // To Reset the quantity input to 1
    quantityInput.value = 1; 
    // To Reset the total price display
    totalPriceElement.textContent = "Total Price: $0.00"; 
    // To Hide the order summary if it was displayed
    orderSummary.style.display = 'none'; 
});

// Allowing the user to hide the order summary
hideSummaryButton.addEventListener('click', function() {
    orderSummary.style.display = 'none'; // Hide the summary section
});
