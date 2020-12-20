//cart
//order

const cartAddProduct = () => 
{
    //this.removeEventListener("click", cartAddProduct);
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) cart = {};
    let id = this.value;
    let count = 2;//document.getElementById("product-count").value;
    cart[id] = count;
    localStorage.setItem("cart", JSON.stringify(cart));
}
