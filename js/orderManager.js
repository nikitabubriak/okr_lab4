//cart
//order

const cartAddProduct = () => 
{
    let count = document.getElementById("count").value;
    if (count = "" || !count) return;
    let btn = document.getElementById("add-to-cart-btn");
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) cart = {};
    let id = btn.value;
    cart[id] = count;
    localStorage.setItem("cart", JSON.stringify(cart));

}

const cartRemoveProduct = (id) =>
{
    let cart = JSON.parse(localStorage.getItem("cart"));
    delete cart[id];
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    // localStorage.removeItem(`"cart.${id}"`);
}

const cartClear = () =>
{
    localStorage.removeItem("cart");
}