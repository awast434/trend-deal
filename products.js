<script>
// Load from localStorage
let savedProducts = JSON.parse(localStorage.getItem("products")) || [];
let container = document.getElementById("productContainer");

// Show products
savedProducts.forEach(p => {
    container.innerHTML += `
    <div class="product-card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
        <a href="${p.link}" target="_blank" class="buy-btn">Buy Now</a>
    </div>`;
});

// Live Search
document.getElementById("searchInput").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(filter)
            ? "block"
            : "none";
    });
});
</script>
