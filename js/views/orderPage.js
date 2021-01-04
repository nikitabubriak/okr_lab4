// const urlParser = (db) =>
// {
//     let currentHash = window.location.hash.split('#')[1];

//     if (!currentHash.includes('/'))         return 'order';

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

    let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));

    let orderPage = 
    `
    <div class = "order-container">
        <form id = "order-form" onsubmit = "submitOrder()">
              <h3>Order information</h3>

              <label for = "name"> Full Name</label>
              <input type = "text" pattern = "[a-Z]{4,32}" required = "required" id = "name" name = "name" placeholder = "Name Example">
              
              <label for = "email"> Email</label>
              <input type = "email" required = "required" id = "email" name = "email" placeholder = "name@example.com">
              
              <label for = "phone"> Phone</label>
              <input type = "tel" pattern = "[0-9]{10}" id = "phone" name = "phone" placeholder = "0891234567">

              <label for = "date"> Date</label>
              <input type = "date" id = "date" name = "date">

              <label for = "time"> Time</label>
              <input type ="time" id = "time" name = "time">

              <label for = "payment"> Payment method</label>
              <select id = "payment" required = "required">
                <option class = "option">Visa</option>
                <option class = "option">Mastercard</option>
              </select><br><br>

              <label for = "card">Credit card number</label>
              <input type = "text" required = "required" pattern = "[0-9]{16}" id = "card" name = "card" placeholder = "1111222233334444">
            
              <br><span class = "total-price">Total price: ${totalPrice} ₴</span><br>
              <br><input type = "submit" value = "Continue" class = "buy-button">
        </form>
    </div>
    `;

    return orderPage;
}


export default view;