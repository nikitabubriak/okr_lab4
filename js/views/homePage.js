const view = (db) => 
{
    let homePage = 
    `
    <div class = "offer">
        <a class = "offer-link" href = "#offer/${db.offers[0].url}">
            <img src = "${db.offers[0].image}" alt = "${db.offers[0].name}">
            </a>
    </div>
    `;

    // homePage +=
    // `
    // <div class = "products-container">
    //     <h2>Featured products</h2><br>
    //     <div class = "products-grid">
    // `;
    
    let featured = [];

    db.catalog[1].map((product) =>
    {
        for (let i = 0; i < db.featuredProducts.length; i++)
        {
            if (product.ID === db.featuredProducts[i])
            {
                featured.push(product);
            }
        }
    });

    homePage += 
    `
    <div class = "products-container">
    <h2>Featured products</h2><br>
    <div class = "products-grid">
        ${
            featured.map((product) =>
            `
            <div class = "product-tile">
                <a class = "product-link" href = "#products/${product.url}">
                    <img src = "${product.image}" alt = "${product.name}">
                    <br><br><span class = "product-name">${product.name}</span>
                </a>
                <a class = "add-to-cart-link" href = "#cart">
                    <button class = "price-add-to-cart-button">${product.price} ₴</button>
                </a>
            </div>
            `).join("")
        }
        </div>
    </div>
    `;
    

    // db.catalog[1].map((product) =>
    // {for (let i = 0; i < db.featuredProducts.length; i++)
    // {if (product.ID === db.featuredProducts[i]) 
    // {`
    // <div class = "product-tile">
    //     <a class = "product-link" href = "#products/${product.url}">
    //         <img src = "${product.image}" alt = "${product.name}">
    //         <br><br><span class = "product-name">${product.name}</span>
    //     </a>
    //     <a class = "add-to-cart-link" href = "#cart">
    //         <button class = "price-add-to-cart-button">${product.price} ₴</button>
    //     </a>
    // </div>
    // `}}}).join("")

    
    // homePage +=
    // `
    // </div>
    // </div>
    // `;

    return homePage;
}


export default view;