const urlParser = (catalog) =>
{
    let currentHash = window.location.hash.split('#')[1];
    if (!currentHash) window.location.hash = '#';

    if (!currentHash.includes('/'))         return 'catalog';

    let subdir = currentHash.split('/')[1];

    for (let i = 0; i < catalog[0].length; i++)
    {
        if (catalog[0][i].url === subdir)   return catalog[0][i];
    }
}

const view = (catalog) => 
{
    let page = urlParser(catalog);

    if (page === 'catalog')
    {
        let catalogPage = 
        `
        <div id = "catalog">
            ${
                catalog[0].map((category) => 
                `
                <div class = "category-item">
                    <span class = "category-name">${category.name}</span>
                    <span class = "category-description">${category.description}</span>
                </div>

                    <div class = "products">
                    ${
                        catalog[1].map((product) => 
                        {if (product.categoryID === category.ID)
                        {`
                        <div class = "product-item">
                            <span class = "product-name">${product.name}</span>
                        </div>
                        `}}).join("")
                    }
                    </div>
                `).join("")
            }
        </div>
        `;

        return catalogPage;
    }
    else
    {
        let categoryPage =
        `
        <div class = "category-item">
            <span class = "category-name">${page.name}</span>
            <span class = "category-description">${page.description}</span>

            <div class = "products">
            ${
                catalog[1].map((product) => 
                {if (product.categoryID === page.ID)
                {`
                <div class = "product-item">
                    <span class = "product-name">${product.name}</span>
                </div>
                `}}).join("")
            }
            </div>
        </div>
        `;

        return categoryPage;
    }

}

export default view;