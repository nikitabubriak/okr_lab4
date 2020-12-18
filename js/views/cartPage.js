const view = (catalog) => 
{
    let cart = [];
    let cartPage = `<p>CART PAGE</p>
    <a href = "#order"><button class = "buy-button" id = "proceed-to-order-btn">Proceed to Order</button></a>`;

    // catalog[1].map((product) =>
    // {
    //     if (product.ID === localStorage cart productID)
    //     {
    //         for (let j = 0; j < localStorage cart productID count; j++)
    //         {
    //             cart.push(product);
    //         }
    //     }
    // });

    // cartPage +=
    // `
    // <div class = "products-container">
    //     <h2>Your shopping cart</h2><br>
    //     <div class = "products-grid">
    //     ${
    //         cart.map((product) =>
    //         `
    //         <div class = "product-tile">
    //             <a class = "product-link" href = "#product/${product.url}">
    //                 <img src = "${product.image}" alt = "${product.name}">
    //                 <br><br><span class = "product-name">${product.name}</span>
    //             </a>
    //             <br><span class = "product-price">${product.price} ₴</span>
    //         </div>
    //         `).join("")
    //     }
    //     </div>
    // </div>
    // `;

    return cartPage;
}


export default view;