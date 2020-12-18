// const urlParser = (db) =>
// {
//     let currentHash = window.location.hash.split('#')[1];

//     if (!currentHash.includes('/'))         return 'catalog';

//     let subdir = currentHash.split('/')[1];

//     for (let i = 0; i < catalog[0].length; i++)
//     {
//         if (catalog[0][i].url === subdir)   return catalog[0][i];
//     }
// }

const view = (db) => 
{
    // let cart = []; 
    // ... localStorage ...
    // let page = urlParser(db);

    let orderPage = `<p>ORDER PAGE</p>
    <a href = "#order/[id]"><button class = "buy-button" id = "submit-order-btn">Buy</button></a>`;

    return orderPage;
}


export default view;