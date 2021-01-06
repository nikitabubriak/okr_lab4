//cart
//order

const countProducts = () =>
{
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) cart = {};
    let count = 0;
    //count = Object.keys(cart).length;
    for (let [key, value] of Object.entries(cart)) count += Number(value);
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

    //try
    //{
    const submitResponse = await fetch
    (
        `https://my-json-server.typicode.com/nikitabubriak/okr_lab4/orders`,
        {
            method: 'POST',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        }
    )
    const response = await submitResponse.json();

    console.log(response);

    
    
    alert(`Order submission complete! ID ${response.id}`);
            
    const rootNode = document.getElementById('main-container');
    rootNode.innerHTML = 
    `
    <p>Thank you for your purchase! This online shop was made for educational purposes only</p><br>
    <p>Order ${response.id}</p>
    <br><p>Details:</p><br>
    <p>${response.name}</p>
    <p>${response.email}</p>
    <p>${response.phone}</p>
    <p>${response.date}</p>
    <p>${response.time}</p>
    <p>${response.payment}</p>
    <p>${response.card}</p>
    <p>${response.name}</p>
    <p>Order Total: ${response.total} ₴</p>
    `;

    history.replaceState(null, null, document.location.pathname + `#order/${response.id}`);
    cartClear();
    
    //.then(response => response.json())
    //.then(res => console.log(res));


    // .then
    // (
    //     (response) => 
    //     {
    //         console.log(response);
            
            
    //     }
    // )
    // .finally(() => 
    // {
        
    // });
    //}
    // catch (submissionError)
    // {
    //     alert("Error. Submission not successful");
    //     window.location.hash = '#';
    // }
    
    //window.location.hash += `/${response.id}`;
    //setTimeout(function() { alert("Alert! This is test"); }, 3000);
    
    //const content = await response.json();
    //console.log(content);
    //window.location.hash += `/${response.id}`;
    
}