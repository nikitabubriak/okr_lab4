//cart
//order

const cartAddProduct = () => 
{
    let btn = document.getElementById("add-to-cart-btn");
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) cart = {};
    let id = btn.value;
    let count = 1;//document.getElementById("product-count").value;
    cart[id] = count;
    localStorage.setItem("cart", JSON.stringify(cart));

}

const cartRemoveProduct = (id) =>
{
    // let cart = JSON.parse(localStorage.getItem("cart"));
    localStorage.removeItem(`"cart.${id}"`);
}

const cartClear = () =>
{
    localStorage.removeItem("cart");
}