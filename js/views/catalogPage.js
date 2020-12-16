const view = (catalog) => 
`
<div id = "categories">
    ${
        catalog[0].map((category) => 
        `
        <div class = "category-item">
            <span class = "category-name">${category.name}</span>
            <span class = "category-description">${category.description}</span>
        </div>
        `).join("")
    }
</div>

<div id = "products">
    ${
        catalog[1].map((product) => 
        `
        <div class = "product-item">
            <span class = "product-name">${product.name}</span>
            <span class = "product-description">${product.description}</span>
        </div>
        `).join("")
    }
</div>
`;

export default view;