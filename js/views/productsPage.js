const view = (products) => 
`
<div id = "products">
    ${products.map((product) => 
        `
        <div class = "product-item">
            <span class = "product-name">${product.name}</span>
            <span class = "product-description">${product.description}</span>
        </div>
        `
    )}
</div>
`;

export default view;
