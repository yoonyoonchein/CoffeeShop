
document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    let total = 0;

    // Function to update the total price
    function updateTotal(price) {
        total += price;
        totalPriceElement.textContent = total.toFixed(2);
    }

    // Function to remove an item from the cart
    function removeFromCart(cartItem, price) {
        cartItems.removeChild(cartItem);
        updateTotal(-price); // Subtract the price of the removed item
    }

    // Function to add a new item to the cart
    function addToCart(product, price) {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${product} - $${price.toFixed(2)}`;

        // Create the "Remove" button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.marginLeft = "10px";
        removeButton.style.backgroundColor = "#dc3545";
        removeButton.style.color = "white";
        removeButton.style.border = "none";
        removeButton.style.padding = "5px 10px";
        removeButton.style.borderRadius = "4px";
        removeButton.style.cursor = "pointer";

        // Add event listener for removing the item
        removeButton.addEventListener("click", () => {
            removeFromCart(cartItem, price);
        });

        // Append the remove button to the cart item
        cartItem.appendChild(removeButton);

        // Append the cart item to the cart list
        cartItems.appendChild(cartItem);

        // Update the total price
        updateTotal(price);
    }

    // Add event listeners to each 'Add to Cart' button
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const product = button.getAttribute("data-product");
            const price = parseFloat(button.getAttribute("data-price"));
            addToCart(product, price);
        });
    });
});
