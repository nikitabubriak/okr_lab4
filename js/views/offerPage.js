const view = (catalog) => 
`
<p>OFFER PAGE</p>

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
`;

export default view;