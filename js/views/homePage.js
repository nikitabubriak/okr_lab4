const view = (db) => 
`
<div class = "offer">
            <a class = "offer-link" href = "/#offer/${db.offers[1].url}">
                <img src = "${db.offers[1].image}" alt = "${db.offers[1].name}">
            </a>
            <span>${db.offers.url}</span>
            <span>${db.offers[2].description}</span>
</div>
`;

export default view;
