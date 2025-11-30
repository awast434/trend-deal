// Load saved products
let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

function renderProducts() {
    const list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach((p, index) => {
        list.innerHTML += `
            <div class="item">
                <img src="${p.img}">
                <h4>${p.name}</h4>
                <p>₹${p.price}</p>
                <p>${p.category}</p>

                <button onclick="deleteProduct(${index})" class="delete">Delete</button>
            </div>
        `;
    });
}

function deleteProduct(index) {
    products.splice(index, 1);
    saveProducts();
    renderProducts();
}

document.getElementById("addBtn").addEventListener("click", () => {

    let name = document.getElementById("productName").value;
    let img = document.getElementById("productImg").value;
    let price = document.getElementById("productPrice").value;
    let link = document.getElementById("productLink").value;
    let category = document.getElementById("productCategory").value;

    if (!name || !img || !price || !link) {
        alert("All fields are required!");
        return;
    }

    let newProduct = {
        name,
        img,
        price,
        link,
        category
    };

    products.push(newProduct);
    saveProducts();
    renderProducts();

    alert("Product Added!");
});

renderProducts();
