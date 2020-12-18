const view = (db) => 
{
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


    let homePage = 
    `
    <div class = "offer">
        <a class = "offer-link" href = "#offer/${db.offers[0].url}">
            <img src = "${db.offers[0].image}" alt = "${db.offers[0].name}">
        </a>
    </div>

    <div class = "products-container">
        <h2>Featured products</h2><br>
        <div class = "products-grid">
        ${
            featured.map((product) =>
            `
            <div class = "product-tile">
                <a class = "product-link" href = "#product/${product.url}">
                    <img src = "${product.image}" alt = "${product.name}">
                    <br><br><span class = "product-tile-name">${product.name}</span>
                    <span class = "product-tile-price">${product.price} ₴</span>
                </a>
            </div>
            `).join("")
        }
        </div>
    </div>
    `;
    
    return homePage;
}


export default view;