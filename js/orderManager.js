//cart
//order

const countProducts = () =>
{
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) cart = {};
    let count = 0;
    //count = Object.keys(cart).length;
    for (let [key, value] of Object.entries(cart)) count += value;
    document.getElementById("total-count").textContent = count;
}

const cartAddProduct = () => 
{
    let count = document.getElementById("count").value;
    if (count == "" || !count) return;
    let btn = document.getElementById("add-to-cart-btn");
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) cart = {};
    let id = btn.value;
    cart[id] = count;
    localStorage.setItem("cart", JSON.stringify(cart));
    countProducts();
}

const cartRemoveProduct = (id) =>
{
    let cart = JSON.parse(localStorage.getItem("cart"));
    delete cart[id];
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    countProducts();
    // localStorage.removeItem(`"cart.${id}"`);
}

const cartClear = () =>
{
    localStorage.removeItem("cart");
    localStorage.removeItem("totalPrice");
    countProducts();
}

const generateID = () =>
{
    let id = '';
    const digits = '0123456789';
    
    for (let i = 0; i < 16; i++) 
    {
        id += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    
    return id;
}

async function submitOrder ()
{
    const form = document.getElementById("order-form")
    const order =
    {
        id: generateID(),
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        date: form.date.value,
        time: form.time.value,
        payment: form.payment.value,
        card: form.card.value,
        cart: JSON.parse(localStorage.getItem("cart")),
        total: JSON.parse(localStorage.getItem("totalPrice"))
    }

    let response = await fetch
    (
        `https://my-json-server.typicode.com/nikitabubriak/okr_lab4/orders`,
        {
            method: 'POST',
            body: JSON.stringify(order)
        }
    )
    .then(response => response.json());

    cartClear();
    window.location.hash += `/${response.id}`;

    const rootNode = document.getElementById('main-container');
    rootNode.innerHTML = `<p>Order ${response.id}</p>`;
}