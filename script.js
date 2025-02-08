document.addEventListener('DOMContentLoaded', function () {
    filterByCategory();
});
document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count");
    const cartItemsContainer = document.getElementById("cart-items");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    let cart = [];

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const productCard = button.parentElement;
            const productName = productCard.querySelector("h3").textContent;
            const productPrice = productCard.querySelector("p").textContent;

            cart.push({ name: productName, price: productPrice });
            updateCart();
        });
    });

    function updateCart() {
        cartCount.textContent = `(${cart.length})`;

        cartItemsContainer.innerHTML = "";
        cart.forEach((item) => {
            const div = document.createElement("div");
            div.textContent = `${item.name} - ${item.price}`;
            cartItemsContainer.appendChild(div);
        });

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>No items in cart.</p>";
        }
    }
});
function filterByCategory() {
    
    const selectedCategory = document.getElementById('categoryFilter').value;

    
    const productCards = document.querySelectorAll('.product-card');

    
    productCards.forEach(card => {
    
        const cardCategory = card.getAttribute('data-category');

    
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
}