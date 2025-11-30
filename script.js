// -----------------------------
// DYNAMIC PRODUCTS FROM ADMIN PANEL
// -----------------------------
let savedProducts = JSON.parse(localStorage.getItem("products")) || [];
let container = document.getElementById("productContainer");

savedProducts.forEach(p => {
    container.innerHTML += `
    <div class="product-card" data-category="${p.category}">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
        <a href="${p.link}" target="_blank" class="buy-btn">Buy Now</a>
    </div>
    `;
});


// -----------------------------
// CATEGORY FILTERING
// -----------------------------
const buttons = document.querySelectorAll(".category-btn");
const productCards = document.querySelectorAll(".product-card");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".category-btn.active").classList.remove("active");
        btn.classList.add("active");

        let category = btn.dataset.category;

        productCards.forEach(card => {
            card.style.display =
                category === "all" || card.dataset.category === category
                    ? "block"
                    : "none";
        });
    });
});

// -----------------------------
// LIVE SEARCH FILTERING
// -----------------------------
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
    let filter = searchInput.value.toLowerCase();
    let products = document.querySelectorAll(".product-card"); // dynamic products

    products.forEach(product => {
        let text = product.innerText.toLowerCase();
        if (text.includes(filter)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
