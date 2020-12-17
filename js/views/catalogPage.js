const view = (catalog) => 
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

export default view;