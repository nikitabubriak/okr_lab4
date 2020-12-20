//cart
//order

const cartAddProduct = (id) => 
{
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) cart = {};
    let count = 2;//document.getElementById("product-count").value;
    cart[id] = count;
    localStorage.setItem("cart", JSON.stringify(cart));
}
