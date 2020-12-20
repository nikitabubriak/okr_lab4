const view = (catalog) => 
{
    let cart = JSON.parse(localStorage.getItem("cart"));
    let cartProducts = [];
    let totalPrice = 0;

    catalog[1].map((product) =>
    {
        for (let id of Object.keys(cart))
        {
            if (product.ID === id)
            {
                for (let i = 0; i < cart[id]; i++)
                {
                    cartProducts.push(product);
                    totalPrice += product.price;
                }
            }
        }
    });

    let cartPage = 
    `
    <p>CART</p>
    <div class = "products-container">
        <h2>Your shopping cart</h2><br>
        <div class = "products-grid">
        ${
            cartProducts.map((product) =>
            `
            <div class = "product-tile">
                <a class = "product-link" href = "#product/${product.url}">
                    <img src = "${product.image}" alt = "${product.name}">
                    <br><br><span class = "product-name">${product.name}</span>
                </a>
                <br><span class = "product-price">${product.price} ₴</span>
            </div>
            `).join("")
        }
        </div>
    </div>
    <span class = "total-price">${totalPrice} ₴</span>
    <a href = "#order">
        <button class = "buy-button" id = "proceed-to-order-btn">Proceed to Order</button>
    </a>
    `;

    return cartPage;
}


export default view;